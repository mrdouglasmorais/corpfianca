const getPreviousNextItem = (items, currentId) => {
	// Se não há currentId, retorna valores seguros
	if (!currentId || !items?.length) {
		return {
			prevId: 1,
			nextId: 1,
			currentItem: {},
			isPrevItem: false,
			isNextItem: false
		};
	}

	const totalItems = items?.length;
	const prevId = currentId > 1 ? currentId - 1 : 1;
	const nextId = currentId < totalItems ? currentId + 1 : totalItems;
	const currentItem = items?.find(({ id }) => currentId === id) || {};
	const isPrevItem = currentId > 1;
	const isNextItem = currentId < totalItems;
	return { prevId, nextId, currentItem, isPrevItem, isNextItem };
};

export default getPreviousNextItem;
