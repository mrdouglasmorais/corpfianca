'use client';
import { useCallback, useEffect, useMemo, useRef } from 'react';

const FormSelect = ({ id, name, className, defaultValue, items, value, onChange }) => {
  const instanceRef = useRef(null);
  const isInitializingRef = useRef(false);
  const mountRef = useRef(true);
  const elementId = id || 'niceselect';

  // Stabilize items to prevent unnecessary re-initializations
  const itemsKey = useMemo(() => {
    if (!items || items.length === 0) return '';
    return items.map((item) => `${item.value}:${item.name}`).join('|');
  }, [items]);

  // Handle change events
  const handleChangeRef = useRef(onChange);
  useEffect(() => {
    handleChangeRef.current = onChange;
  }, [onChange]);

  const handleSelectChange = useCallback((e) => {
    if (handleChangeRef.current) {
      handleChangeRef.current(e);
    }
  }, []);

  // Main initialization effect
  useEffect(() => {
    mountRef.current = true;
    let mounted = true;
    let niceSelectInstance = null;

    const initialize = async () => {
      // Prevent concurrent initializations
      if (isInitializingRef.current) {
        return;
      }
      isInitializingRef.current = true;

      try {
        const { default: NiceSelect } = await import('../../../libs/nice-select2');

        if (!mounted) return;

        const el = document.getElementById(elementId);
        if (!el) {
          isInitializingRef.current = false;
          return;
        }

        // Destroy existing instance completely
        const existingInstance = instanceRef.current;
        if (existingInstance) {
          try {
            if (typeof existingInstance.destroy === 'function') {
              existingInstance.destroy();
            }
          } catch (e) {
            console.warn('Error destroying existing NiceSelect:', e);
          }
          instanceRef.current = null;
        }

        // Remove any existing nice-select markup
        const existingDropdown = el.nextElementSibling;
        if (existingDropdown && existingDropdown.classList.contains('nice-select')) {
          existingDropdown.remove();
        }

        // Reset element styles and classes
        el.style.display = 'none';
        el.classList.remove('nice-select', 'open');

        // Clear any inline styles that NiceSelect might add
        ['opacity', 'width', 'padding', 'height', 'fontSize'].forEach((prop) => {
          el.style[prop] = '';
        });

        // Attach change handler BEFORE creating NiceSelect
        el.addEventListener('change', handleSelectChange);

        // Create new NiceSelect instance
        niceSelectInstance = new NiceSelect(el, {
          placeholder: defaultValue || 'Select One',
        });

        if (!mounted) {
          try {
            niceSelectInstance.destroy();
          } catch (e) {
            // Ignore
          }
          return;
        }

        instanceRef.current = niceSelectInstance;
        el.niceSelectInstance = niceSelectInstance;

        // Set initial value after a brief delay to ensure NiceSelect is ready
        if (value !== undefined) {
          setTimeout(() => {
            if (!mounted || !niceSelectInstance) return;

            try {
              el.value = value;
              const option = niceSelectInstance.options?.find((opt) => opt.data?.value === value);

              if (option) {
                // Remove selected from all
                niceSelectInstance.options.forEach((opt) => {
                  if (opt.element) {
                    opt.element.classList.remove('selected');
                  }
                });

                // Set new selected
                niceSelectInstance.selectedOptions = [option];
                if (option.element) {
                  option.element.classList.add('selected');
                }
                niceSelectInstance._renderSelectedItems();
              }
            } catch (e) {
              console.warn('Error setting initial value:', e);
            }
          }, 100);
        }
      } catch (error) {
        console.error('Error initializing NiceSelect:', error);
      } finally {
        if (mounted) {
          isInitializingRef.current = false;
        }
      }
    };

    initialize();

    // Cleanup function
    return () => {
      mounted = false;
      mountRef.current = false;

      const el = document.getElementById(elementId);

      // Remove change listener
      if (el) {
        el.removeEventListener('change', handleSelectChange);
      }

      // Destroy instance
      const instance = instanceRef.current;
      if (instance) {
        try {
          if (typeof instance.destroy === 'function') {
            instance.destroy();
          }
        } catch (e) {
          console.warn('Error destroying NiceSelect in cleanup:', e);
        }
        instanceRef.current = null;
      }

      // Remove dropdown markup
      if (el?.nextElementSibling?.classList.contains('nice-select')) {
        el.nextElementSibling.remove();
      }
    };
  }, [elementId, defaultValue, itemsKey, handleSelectChange]); // Re-init when items change

  // Update value when it changes (without re-initializing)
  useEffect(() => {
    if (value === undefined) return;

    let attempts = 0;
    const maxAttempts = 10;

    // Use requestAnimationFrame for better timing
    const updateValue = () => {
      attempts++;
      const el = document.getElementById(elementId);
      const instance = instanceRef.current || el?.niceSelectInstance;

      if (!el || !instance) {
        // Retry if instance not ready yet
        if (attempts < maxAttempts) {
          setTimeout(updateValue, 50);
        }
        return;
      }

      if (!instance.options || instance.options.length === 0) {
        // Wait for options to be available
        if (attempts < maxAttempts) {
          setTimeout(updateValue, 50);
        }
        return;
      }

      // Update native select
      if (el.value !== value) {
        el.value = value;
      }

      // Update NiceSelect
      const option = instance.options.find((opt) => opt.data?.value === value);

      if (option) {
        // Remove selected from all
        instance.options.forEach((opt) => {
          if (opt.element) {
            opt.element.classList.remove('selected');
          }
        });

        // Set new selected
        instance.selectedOptions = [option];
        if (option.element) {
          option.element.classList.add('selected');
        }

        try {
          instance._renderSelectedItems();
        } catch (e) {
          console.warn('Error rendering selected items:', e);
        }
      }
    };

    // Try immediate update, then fallback to delayed
    requestAnimationFrame(() => {
      updateValue();
    });

    const timer = setTimeout(updateValue, 100);
    return () => clearTimeout(timer);
  }, [value, elementId]);

  return (
    <select
      name={name || 'niceselect'}
      id={elementId}
      className={className || 'nice-select'}
      value={value !== undefined ? value : defaultValue || ''}
      onChange={handleSelectChange}
      style={{ display: 'none' }}
    >
      {items?.map((item, idx) => (
        <option key={`${item?.value || idx}`} value={item?.value}>
          {item?.name}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;
