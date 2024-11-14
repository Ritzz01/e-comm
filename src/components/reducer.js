export const initialState = {
    basket: [],
  };
  

  export const BasketTotal = (basket) => {
    return basket.reduce((total, item) => {
      return total + (item.price || 0) * (item.quantity || 1); // Ensure quantity and price are valid
    }, 0);
  };

  const reducer = (state, action) => {
    // console.log(action);
    
    switch (action.type) {
      case "ADD_TO_BASKET":
        return { ...state, basket: [...state.basket, action.item] };


        case "REMOVE_FROM_BASKET":
          // Find the index of the item to remove
          const index = state.basket.findIndex(basketItem => basketItem.id === action.id);
      
          // Create a copy of the basket array
          let newBasket = [...state.basket];
      
          // If the item exists in the basket, remove it
          if (index >= 0) {
              newBasket.splice(index, 1); // Remove 1 item at the found index
          } else {
              console.log(`Item with id ${action.id} not found in basket`);
          }
      
          // Return the new state with the updated basket
          return {
              ...state,
              basket: newBasket
          };
      
      
      
      default:
        return state;
    }
  };
  
  export default reducer;
  