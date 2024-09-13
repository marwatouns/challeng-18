import { createSlice, configureStore } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    //
    increment(state, action) {
      state.counter += 1;
    },
    decrement(state, action) {
      state.counter -= 1;
    },
    add42(state, action) {
      const nbr = action.payload;
      state.counter += nbr;
    },
  },
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalItems: 0,
  },
  reducers: {
    addInCart(state, action) {
      const newItem = action.payload;
      const itemAlreadyAdded = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (itemAlreadyAdded) {
        itemAlreadyAdded.quantity += 1;
        itemAlreadyAdded.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalItems += 1;
      }
    },
    removeFromCart(state, action) {
      return 0;
    },
  },
});

export const actions = countSlice.actions;
export const actionsCart = cartSlice.actions;

const store = configureStore({
  reducer: {
    reCounter: countSlice.reducer,
    reCart: cartSlice.reducer,
  },
});
export default store;
