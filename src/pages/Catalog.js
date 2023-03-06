import "../styles/App.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { filterProduct } from "../actions/catalogActions";
import MessageBox from "../components/MessageBox";
import CatalogProductsList from "../components/CatalogProductsList";
import { useNavigate } from "react-router-dom";
import CatalogLoader from "../components/CatalogLoader";

function Catalog() {
  const dispatch = useDispatch();
  const filteredList = useSelector((state) => state.filteredList);
  const { loading, error, products } = filteredList;
  const [search, setSearch] = useState("");
  // FILTERS
  const [model, setModel] = useState("All");
  const [price, setPrice] = useState("All");

  const history = useNavigate();

  useEffect(() => {
    const url = `/catalog?model=${model}&price=${price}`;
    history.push(url);
  }, [model, price, history]);

  useEffect(() => {
    dispatch(filterProduct(model, price));
  }, [dispatch, model, price]);

  // SEARCH
  function searchHandler(info) {
    return info.filter(
      (i) =>
        i.name.toLowerCase().includes(search.toLowerCase()) ||
        i.description.toLowerCase().includes(search.toLowerCase()) ||
        i.price.toString().toLowerCase().includes(search.toLowerCase())
    );
  }

  function sliderHandler(info) {
    // const slider = document.getElementById('price-slider');
    // slider.addEventListener('mouseup', e => {
      

    // });
    setPrice(info);
  }

  return (
    <div className="Catalog container">
      <div >
        <div className="catalog-header">
          <div className="catalog-filter-by-price">
            <span className="catalog-filter-text">Model</span>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="catalog-filter-list"
            >
              <option value="All" className="catalog-filter-item">
                All
              </option>
              <option value="Iphone 11" className="catalog-filter-item">
                Iphone 11
              </option>
              <option value="Iphone 12" className="catalog-filter-item">
                Iphone 12
              </option>
              <option value="Iphone 12 Pro" className="catalog-filter-item">
                Iphone 12 pro
              </option>
            </select>
          </div>

          <div className="catalog-filter-by-price">
            <span className="catalog-filter-text">Price</span>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="catalog-filter-list"
            >
              <option value="All" className="catalog-filter-item">
                All
              </option>
              <option value="500" className="catalog-filter-item">
                500
              </option>
              <option value="600" className="catalog-filter-item">
                600
              </option>
              <option value="700" className="catalog-filter-item">
                700
              </option>
              <option value="1000" className="catalog-filter-item">
                1000
              </option>
            </select>
          </div>

          <div className="slider-wrapper">
            <input
              className="slider"
              value={price}
              onChange={(e) => sliderHandler(e.target.value)}
              type="range"
              min="500"
              max="1000"
              step="100"
              id="price-slider"
            />
            <div className="slider-footer">
              <div>500 $</div>
              <div>1000 $</div>
            </div>
          </div>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="catalog-search"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      {loading ? (
        <CatalogLoader />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <CatalogProductsList data={searchHandler(products)} />
      )}
    </div>
  );
}

export default Catalog;
