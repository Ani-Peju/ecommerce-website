import React, { useState } from "react";


function ShoppingCart() {
    const [cart, setCart] = useState([
    ]);

    function increaseQty(id) {
        setCart(
            cart.map(function (item) {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            })
        );
    }

    function decreaseQty(id) {
        setCart(
            cart.map(function (item) {
                if (item.id === id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            })
        );
    }

    function removeItem(id) {
        setCart(cart.filter(function (item) {
            return item.id !== id;
        }));
    }

    function calculateTotal() {
        return cart.reduce(function (acc, item) {
            return acc + item.price * item.quantity;
        }, 0);
    }

    return (
        <div className="cart-container">
            <h1>Shopping Cart</h1>

            {cart.length === 0 && <p>Your cart is empty!</p>}

            {cart.length > 0 && (
                <div>
                    {cart.map(function (item) {
                        return (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price.toFixed(2)}</p>
                                </div>

                                <div className="item-controls">
                                    <button onClick={function () { decreaseQty(item.id); }}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={function () { increaseQty(item.id); }}>+</button>
                                </div>

                                <div className="item-actions">
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                    <button onClick={function () { removeItem(item.id); }}>Remove</button>
                                </div>
                            </div>
                        );
                    })}

                    <h2>Total: ${calculateTotal().toFixed(2)}</h2>
                    <button
                        className="checkout-btn"
                        onClick={function () { alert("Proceeding to checkout..."); }}
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}

export default ShoppingCart;

