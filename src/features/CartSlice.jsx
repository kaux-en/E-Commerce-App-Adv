import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newProduct = action.payload
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.products.push({...newProduct, quantity: 1});
            }
        },

        removeFromCart(state, action) {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;