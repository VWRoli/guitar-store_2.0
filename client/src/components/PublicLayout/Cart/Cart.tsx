import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (): JSX.Element => {
  return (
    <section className="cart">
      <h1 className="cart-title">Your Cart:</h1>

      <div className="your-cart">
        <h3 className="empty-cart-msg">
          You don't have any products in your cart yet.
        </h3>
        <Link to="/products" className="cart-products-link">
          Products
        </Link>
      </div>

      <div className="clear-btn-wrapper">
        <button className="clear-cart">Clear Cart</button>
      </div>

      <div className="cart-total">
        <h3>Total:</h3>
        <h3>0</h3>
      </div>
    </section>
  );
};

export default Cart;
