export const addItemToCart = (arr, newItem) => {
  const existingItem = arr.find(item => item.id === newItem.id);

  if (existingItem) {
    const newArr = arr.map(item => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return newArr;
  }

  return [...arr, { ...newItem, quantity: 1 }];
};
