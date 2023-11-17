
export const addToCart = (product,quantity=1) => ({
    type: 'ADD_TO_CART',
    payload: {...product,quantity},
  });
  
  export const calculateTotal = () => ({
    type: 'CALCULATE_TOTAL',
  });

export const increaseQuantity = (productId) => ({
  type: 'INCREASE_QUANTITY',
  payload: productId,
});

export const decreaseQuantity = (productId) => ({
  type: 'DECREASE_QUANTITY',
  payload: productId,
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});
