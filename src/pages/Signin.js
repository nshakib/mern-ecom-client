import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import MessageBox from "../Components/MessageBox";
import * as Yup from "yup";

export default function Signin(props) {
  const [showPassword, setShowPassword] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    dispatch(signin(values.email, values.password));
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  return (
    <div className="signin container">
      <div className="signin-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="signin-form">
            <h1>Sign In</h1>
            {loading && <MessageBox variant="succes">Please, wait</MessageBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="email"
                type="email"
                id="email"
                required
              />
              <label className="signin-label" htmlFor="email">
                Email address
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="email" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                name="password"
                type={showPassword ? "text" : "password"}
                id="password"
                required
              />

              <label className="signin-label" htmlFor="password">
                Password
              </label>
              <i
                className={
                  showPassword ? "eye-icon eye-false" : "eye-icon eye-true"
                }
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="password" />
            </div>

            <div className="signin-button-wrapper">
              <label />
              <button className="signin-button" type="submit">
                Sign In
              </button>
            </div>
            <div>
              <label />
              <div className="signin-reg-text">
                New customer?{" "}
                <Link to={`/register?redirect=${redirect}`}>
                  Create your account
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
