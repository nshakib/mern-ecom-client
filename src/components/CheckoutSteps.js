import React from "react";
import "../styles/App.css";

export default function CheckoutSteps(props) {
  return (
    <div className="container">
      <div className="checkout-steps">
        <div className={props.step1 ? "active" : ""}>Sign-In</div>
        <div className={props.step2 ? "active" : ""}>Shipping</div>
        <div className={props.step3 ? "active" : ""}>Payment</div>
        <div className={props.step4 ? "active" : ""}>Place Order</div>
      </div>
    </div>
  );
}
