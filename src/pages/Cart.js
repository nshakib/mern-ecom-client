import "../styles/App.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";

function Cart(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  const removeFromCartHandler = (id) => {
    //delete action
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  };
  return (
    <div className="cart container">
      <div className="cart-title">Shopping Cart</div>
      {cartItems.length === 0 ? (
        <MessageBox>Cart is empty.</MessageBox>
      ) : (
        <ul className="cart-items-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />

              <div className="cart-item-name">
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </div>
              <select
                value={item.qty}
                onChange={(e) =>
                  dispatch(addToCart(item.product, Number(e.target.value)))
                }
                className="cart-select"
              >
                {[...Array(item.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
              <div className="cart-item-price">{item.price} $</div>
              <button
                className="cart-item-btn-delete"
                type="button"
                onClick={() => removeFromCartHandler(item.product)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      )}
      <div className="cart-total-price">
        Total amount:{" "}
        <span className="amount-price-bg">
          {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} $
        </span>{" "}
      </div>
      <div className="cart-footer">
        <Link to={"/catalog"} className="cart-back-btn">
          Back to Catalog
        </Link>
        <button
          className="cart-cont-btn"
          type="button"
          onClick={checkoutHandler}
          disabled={cartItems.length === 0}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Cart;