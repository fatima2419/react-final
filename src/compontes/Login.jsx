import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import '../App.css';

export default function Login() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  // Define the users array and authenticateUser function
  const users = [
    { name: "John", email: "john@example.com", password: "password123" },
    { name: "Alice", email: "alice@example.com", password: "password456" },
  ];

  const authenticateUser = (email, password) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    return user;
  };

  const signupSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values) => {
    const { email, password } = values;
    const user = authenticateUser(email, password);

    if (user) {
      setAuthenticated(true);
      navigate("/Firstoage");
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={handleLogin}
      >
        {({ errors, values, handleChange }) => (
          <Form className="form">
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email Address"
              type="email"
              value={values.email}
              onChange={handleChange}
              fullWidth
              variant="standard"
              helperText={<ErrorMessage name="email" />}
            />

            <TextField
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              fullWidth
              variant="standard"
              helperText={<ErrorMessage name="password" />}
            />
            <button type="submit" className="button login">
              Log in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
