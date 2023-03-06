import "../styles/App.css";
import React, { useEffect, useState } from "react";
import ItemCardHome from "../components/ItemCardHome";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";

function Home() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const [viewMore, setViewMore] = useState(4);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="Home container">
      <div className="home-header-card">
        <div className="home-main-img"></div>
        <div className="home-text-block">
          <h1 className="home-title">IPhone 12</h1>
          <p className="home-second-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            similique aperiam tenetur illum facere!
          </p>
          <div className="home-button-body">
            <button className="home-button">Buy</button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="home-loading-item-card">
          {[...Array(4)].map((x, i) => (
            <LoadingBox key={i} />
          ))}
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="home-item-cards-wrapper">
          <div className="home-item-cards">
            {products.slice(0, viewMore).map((info, index) => {
              return (
                <ItemCardHome
                  key={index}
                  product={info}
                />
              );
            })}
          </div>
          <div className="home-item-cards-footer">
            { viewMore <= 8 ? <button onClick={() => setViewMore(viewMore => viewMore + 4)} className="home-more-btn">View More</button> : ''}
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
