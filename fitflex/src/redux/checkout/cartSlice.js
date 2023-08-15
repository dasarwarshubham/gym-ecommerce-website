import { createSlice } from "@reduxjs/toolkit";
import {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  setShippingInfo,
} from "./cartActions";

const isPendingAction = (action) => {
  return action.type.startsWith("cart/") && action.type.endsWith("/pending");
};
// const isFulfilledAction = (action) => {
//   return action.type.startsWith("cart/") && action.type.endsWith("/fulfilled");
// };
const isRejectedAction = (action) => {
  return action.type.startsWith("cart/") && action.type.endsWith("/rejected");
};

const initialState = {
  items: [],
  address: null,
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  // reducers: {
  //   addToCart: (state, action) => {
  //     const { item, quantity } = action.payload;
  //     const existingItem = state.items.find(
  //       (cartItem) => cartItem.id === item.id
  //     );
  //     if (existingItem) {
  //       existingItem.quantity += quantity;
  //     } else {
  //       state.items.push({ ...item, quantity });
  //     }
  //   },
  //   removeFromCart: (state, action) => {
  //     const itemId = action.payload;
  //     state.items = state.items.filter((item) => item.id !== itemId);
  //   },
  //   updateQuantity: (state, action) => {
  //     const { itemId, quantity } = action.payload;
  //     const itemToUpdate = state.items.find((item) => item.id === itemId);
  //     if (itemToUpdate) {
  //       itemToUpdate.quantity = quantity;
  //     }
  //   },
  //   clearCart: (state) => {
  //     state.items = [];
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(updateQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(clearCart.fulfilled, () => {
        return initialState;
      })
      .addCase(setShippingInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
      })
      // .addMatcher(isFulfilledAction, (state, action) => {
      //   state.loading = false;
      //   state.items = action.payload;
      // })
      .addMatcher(isPendingAction, (state) => {
        state.loading = true;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

// export const { addToCart, removeFromCart, updateQuantity, clearCart } =
//   cartSlice.actions;

export default cartSlice.reducer;
