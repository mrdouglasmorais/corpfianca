const addItemsToLocalstorage = (itemName, items) => {
  // Verificar se está no lado do cliente
  if (typeof window !== 'undefined' && localStorage) {
    const itemsToLocalstorage = JSON.stringify(items);
    localStorage.setItem(itemName, itemsToLocalstorage);
  }
};

export default addItemsToLocalstorage;
