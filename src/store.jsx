import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/CartSlice';
import userReducer from './features/UserSession';



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    userSession: userReducer
  }
});


export default store;