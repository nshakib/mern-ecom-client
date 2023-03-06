import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../images/success.png";
import "../styles/App.css";

export default function Success(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push("/signin");
  }
  return (
    <div className="container">
      <div className="success">
        <img src={img} alt="" className="success-img" />
        <h1>Success!</h1>
        <h4>Your order was send to processing!</h4>
        <Link className='success-button' to='/catalog'>Go back to Catalog</Link>
      </div>
    </div>
  );
}
