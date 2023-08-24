const GlobalReducer = (state, action) => {
  switch (action.type) {

    case "ADD_TO_CART":
      let { id, image, name, itemName, price, stock } = action.payload;

      let cartProduct = {
        id: id,
        image: image,
        name: name,
        itemName: itemName,
        price: price,
        qty: 1,
        stock: stock,
      };

      const totalAmountAfterAdd = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      const cartItemProduct = state.cart.filter((item) => item.id === id);
      if (cartItemProduct.length > 0) {
        return state;
      } else {
        return {
          ...state,
          cart: [...state.cart, cartProduct],
          total_amount: totalAmountAfterAdd,
        };
      }

    case "REMOVE_ITEM":
      const updatedCartAfterRemove  = state.cart.filter(
        (currItem) => currItem.id !== action.payload
      );

      const totalAmount = updatedCartAfterRemove.reduce(
        (total, item) => total + item.price * item.qty, 0)
      return {
        ...state,
        cart: updatedCartAfterRemove,
        total_amount: totalAmount,
      };

    case "INCREASE_QTY":

      const updatingIncreaseQtyItem = state.cart.map((item) => {
        if (item.id === action.payload) {
          const newQty = Math.min(item.qty + 1 , item.stock)
          return { ...item, qty: newQty};
        } else {
          return item;
        }
      });

      const totalAmountAfterIncrease = state.cart.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );

      return {
        ...state,
        cart: updatingIncreaseQtyItem,
        total_amount: totalAmountAfterIncrease,
      };
      
    case "DECREASE_QTY":
      const updatingDecreaseQtyItem = state.cart.map((item) => {
        if (item.id === action.payload && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        cart: updatingDecreaseQtyItem,
      };

    default:
      return state;
  }
};

export default GlobalReducer;


