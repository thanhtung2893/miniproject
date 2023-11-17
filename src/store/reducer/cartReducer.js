const initialState = {
  cart: [],
  total: 0,
};
const findProductIndex = (cart, productId) =>
  cart.findIndex((item) => item.id === productId);

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const { payload } = action;
      const productIndex = findProductIndex(state.cart, payload.id);

      if (productIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        const updatedCart = [...state.cart];
        updatedCart[productIndex].quantity += payload.quantity;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
        return {
          ...state,
          cart: [...state.cart, payload],
        };
      }

    case 'CALCULATE_TOTAL':
      const total = state.cart.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
      );
      return {
        ...state,
        total,
      };
    //  tăng số lượng
    case 'INCREASE_QUANTITY':
      const incProductIndex = findProductIndex(state.cart, action.payload);

      if (incProductIndex !== -1) {
        const updatedIncCart = [...state.cart];
        updatedIncCart[incProductIndex].quantity += 1;

        return {
          ...state,
          cart: updatedIncCart,
        };
      }
      return state;
    //giảm số lượng
    case 'DECREASE_QUANTITY':
      const decProductIndex = findProductIndex(state.cart, action.payload);

      if (decProductIndex !== -1) {
        const updatedDecCart = [...state.cart];
        updatedDecCart[decProductIndex].quantity =
          updatedDecCart[decProductIndex].quantity > 1
            ? updatedDecCart[decProductIndex].quantity - 1
            : 1;

        return {
          ...state,
          cart: updatedDecCart,
        };
      }
      return state;

      case 'REMOVE_FROM_CART':
        const updatedCart = state.cart.filter((product) => product.id !== action.payload);
  
        return {
          ...state,
          cart: updatedCart,
        };
  
    default:
      return state;
  }
};



