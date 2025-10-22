const getItemsFromLocalstorage = (itemName) => {
  // Verificar se está no lado do cliente
  if (typeof window === 'undefined' || !localStorage) {
    return null;
  }

  let itemsFromLocastorage = localStorage.getItem(itemName);

  if (itemsFromLocastorage) {
    itemsFromLocastorage = JSON.parse(itemsFromLocastorage);
  } else {
    itemsFromLocastorage = null;
  }
  return itemsFromLocastorage;
};

export default getItemsFromLocalstorage;
