const getPreviousNextItem = (items, currentId) => {
  // Se não há currentId, retorna valores seguros
  if (!currentId || !items?.length) {
    return {
      prevId: 1,
      nextId: 1,
      currentItem: {},
      isPrevItem: false,
      isNextItem: false,
    };
  }

  // Converter currentId para número
  const numId = parseInt(currentId, 10);

  const totalItems = items?.length;
  const prevId = numId > 1 ? numId - 1 : 1;
  const nextId = numId < totalItems ? numId + 1 : totalItems;
  const currentItem = items?.find(({ id }) => numId === id) || {};
  const isPrevItem = numId > 1;
  const isNextItem = numId < totalItems;
  return { prevId, nextId, currentItem, isPrevItem, isNextItem };
};

export default getPreviousNextItem;
