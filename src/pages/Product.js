import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow from "../assets/images/icons/arrow-left.svg";
import LoadingRectangle from "../components/LoadingRectangle";
import MessageBox from "../components/MessageBox";
import { detailsProduct } from "../actions/productAction";

function Product(props) {
  const history = useNavigate();
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);
  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  // function backHandler() {
  //   window.history.back();
  // }
  return (
    <div className="product-wrapper">
      {loading ? (
        <div className="product-load container">
          <LoadingRectangle height="100%" width="45%" />
          <LoadingRectangle height="100%" width="50%" />
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="product container">
          
          <button className="product-link" onClick={() => {
            history.goBack();
          }}>
            <img src={arrow} alt="arrow" />
          </button>
          <div className="product-card">
            <div className="product-header">
              <img
                src={product.image}
                alt={product.image}
                className="product-img"
              />
            </div>
            <div className="product-body">
              <div className="product-body-head">
                <div className="product-title">{product.name}</div>
                <div className="product-description">{product.description}</div>
              </div>
              <div className="product-footer">
                <div className="product-price">{product.price} $</div>
                <div className="product-price-wrapper">
                  {product.countInStock > 0 && (
                    <>
                      <select
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        className="product-qty"
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={addToCartHandler}
                        className="product-buy-button"
                      >
                        Add to Cart
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
