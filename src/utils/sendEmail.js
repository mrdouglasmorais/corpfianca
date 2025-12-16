/**
 * Utilitário para envio de emails através da API
 */
export const sendContactEmail = async (formData, locale = 'pt') => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        locale,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erro ao enviar email');
    }

    return data;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

