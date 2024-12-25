import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../features/CartSlice";


function Cart() {
    const cartItems = useSelector(state => state.cart.products);
    const dispatch = useDispatch();


    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    };

    return (
        <div>
        <h2>Cart</h2>

        {
            cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {
                        cartItems.map((items) => (
                            <li key={items.id}>
                                {items.name} - ${items.price}
                                <button onClick={() => handleRemove(IDBCursor)}>Remove Item</button>
                            </li>
                        ))
                    }
                </ul>
            )
        }
        </div>
    )
};

export default Cart;