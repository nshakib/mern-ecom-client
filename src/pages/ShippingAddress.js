import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../Components/CheckoutSteps";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ShippingAddress(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) {
    props.history.push("/signin");
  }
  const dispatch = useDispatch();

  const initialValues = {
    fullName: `${shippingAddress.fullName}`,
    address: `${shippingAddress.address}`,
    city: `${shippingAddress.city}`,
    postalCode: `${shippingAddress.postalCode}`,
    country: `${shippingAddress.country}`,
  };

  const onSubmit = (values) => {
    console.log("test");
    dispatch(saveShippingAddress(values));
    props.history.push("/success");
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    postalCode: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  });

  return (
    <div className="container">
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="shipping ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="signin-form">
            <h1>Shipping Address</h1>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="fullName"
                type="text"
                id="fullName"
                required
              />
              <label className="signin-label" htmlFor="fullName">
                Full name
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="fullName" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="address"
                type="text"
                id="address"
                required
              />
              <label className="signin-label" htmlFor="address">
                Address
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="address" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="city"
                type="text"
                id="city"
                required
              />
              <label className="signin-label" htmlFor="city">
                City
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="city" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="postalCode"
                type="text"
                id="postalCode"
                required
              />
              <label className="signin-label" htmlFor="postalCode">
                Postal Code
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="postalCode" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="country"
                type="text"
                id="country"
                required
              />
              <label className="signin-label" htmlFor="country">
                Country
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="country" />
            </div>

            <div className="shipping-footer">
              <label />
              <button type="submit" className="shipping-button">
                Continue
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
