import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";

export default function ShippingForm(props) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
    },
    onSubmit: (values) => {
      dispatch(saveShippingAddress(values));
      console.log("done");
      this.props.history.push("/payment");
    },
  });
  return (
    <div>
      <form className="signin-form" onSubmit={formik.handleSubmit}>
        <div>
          <h1>Shipping Address</h1>
          <div>
            <div className="signin-input-wrapper">
              <input
                className="signin-input"
                type="text"
                id="fullName"
                required
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              <label className="signin-label" htmlFor="fullName">
                Full name
              </label>
            </div>

            <div className="signin-input-wrapper">
              <input
                className="signin-input"
                type="text"
                id="address"
                required
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              <label className="signin-label" htmlFor="address">
                Address
              </label>
            </div>

            <div className="signin-input-wrapper">
              <input
                className="signin-input"
                type="text"
                id="city"
                required
                value={formik.values.city}
                onChange={formik.handleChange}
              />
              <label className="signin-label" htmlFor="city">
                City
              </label>
            </div>

            <div className="signin-input-wrapper">
              <input
                className="signin-input"
                type="text"
                id="postalCode"
                required
                value={formik.values.postalCode}
                onChange={formik.handleChange}
              />
              <label className="signin-label" htmlFor="postalCode">
                Postal Code
              </label>
            </div>

            <div className="signin-input-wrapper">
              <input
                className="signin-input"
                type="text"
                id="country"
                required
                value={formik.values.country}
                onChange={formik.handleChange}
              />
              <label className="signin-label" htmlFor="country">
                Country
              </label>
            </div>
            <div className="shipping-footer">
              <button type="submit" className="shipping-button">
                Continue
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
