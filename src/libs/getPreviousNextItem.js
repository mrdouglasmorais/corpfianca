const getIndexByIdentifier = (items, identifier) => {
  if (!items?.length || identifier === undefined || identifier === null) {
    return -1;
  }

  const parsedId = Number.parseInt(identifier, 10);
  if (!Number.isNaN(parsedId)) {
    const numericIndex = items.findIndex(({ id }) => id === parsedId);
    if (numericIndex !== -1) {
      return numericIndex;
    }
  }

  if (typeof identifier === 'string') {
    const normalized = identifier.toLowerCase();
    const slugIndex = items.findIndex(
      ({ slug, id }) =>
        (slug && slug.toLowerCase() === normalized) || `${id}`.toLowerCase() === normalized,
    );
    if (slugIndex !== -1) {
      return slugIndex;
    }
  }

  return -1;
};

const getPreviousNextItem = (items, identifier) => {
  if (identifier === undefined || identifier === null || !items?.length) {
    return {
      prevId: 1,
      nextId: 1,
      currentItem: {},
      isPrevItem: false,
      isNextItem: false,
    };
  }

  const totalItems = items.length;
  const currentIndex = getIndexByIdentifier(items, identifier);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const prevIndex = safeIndex > 0 ? safeIndex - 1 : 0;
  const nextIndex = safeIndex < totalItems - 1 ? safeIndex + 1 : safeIndex;

  return {
    prevId: items[prevIndex]?.id ?? null,
    nextId: items[nextIndex]?.id ?? null,
    currentItem: items[safeIndex] || {},
    isPrevItem: safeIndex > 0,
    isNextItem: safeIndex < totalItems - 1,
  };
};

export default getPreviousNextItem;
