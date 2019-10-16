export const addItemToCart = (cartItems, cartItem) => {
  const existingItem = cartItems.find(item => item.id === cartItem.id);

  if (existingItem) {
    const newCartItems = cartItems.map(item => {
      if (item.id === cartItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    return newCartItems;
  }

  return [...cartItems, { ...cartItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItem) => {
  if (cartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItem);
  }
  const newCartItems = cartItems.map(item => {
    if (item.id === cartItem.id) {
      return { ...cartItem, quantity: cartItem.quantity - 1 };
    }
    return item;
  });

  return newCartItems;
};

export const clearItemFromCart = (cartItems, cartItem) => {
  return cartItems.filter(item => item.id !== cartItem.id);
};
