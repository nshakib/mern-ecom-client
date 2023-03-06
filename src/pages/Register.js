import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import MessageBox from "../components/MessageBox";
import * as Yup from "yup";

export default function Register(props) {
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  const userSignin = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const onSubmit = (values) => {
    dispatch(register(values.name, values.email, values.password));
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    passwordConfirm: Yup.string().when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      ),
    }),
  });

  return (
    <div className="signin container">
      <div className="signin-wrapper">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          
          <Form className="signin-form">
            <h1>Register</h1>

            {loading && <MessageBox variant="succes">Please, wait</MessageBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                type="text"
                id="name"
                required
                name="name"
              />
              <label className="signin-label" htmlFor="name">
                Name
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="name" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                type="email"
                id="email"
                required
                name="email"
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
                type="password"
                id="password"
                required
                name="password"
              />
              <label className="signin-label" htmlFor="password">
                Password
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="password" />
            </div>

            <div className="signin-input-wrapper">
              <Field
                className="signin-input"
                type="password"
                id="passwordConfirm"
                required
                name="passwordConfirm"
              />
              <label className="signin-label" htmlFor="passwordConfirm">
                Confirm Password
              </label>
            </div>
            <div className="form-msg">
              <ErrorMessage className="form-msg" name="passwordConfirm" />
            </div>

            <div className="signin-button-wrapper">
              <label />
              <button className="signin-button" type="submit">
                Register
              </button>
            </div>
            <div>
              <label />
              <div className="signin-reg-text">
                Already have an account?{" "}
                <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
