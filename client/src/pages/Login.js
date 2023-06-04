import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: "",
      password: "",
    });
    setTouchedFields({
      email: false,
      password: false,
    });
  };

  const handleFieldBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tsukimi+Rounded:wght@300&display=swap');
      </style>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <div className="center-align">
                  <span className="card-title" style={{ fontFamily: 'Tsukimi Rounded, sans-serif' }}>Login</span>
                </div>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                  <Alert
                    show={showAlert}
                    variant="danger"
                    style={{ position: "relative", padding: "0.5rem 1.25rem" }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "0.5rem",
                        right: "0.5rem",
                        width: "24px",
                        height: "24px",
                        lineHeight: "24px",
                        textAlign: "center",
                        borderRadius: "4px",
                        backgroundColor: "#c6070c",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => setShowAlert(false)}
                    >
                      X
                    </div>
                    Something went wrong with your login credentials!
                  </Alert>
                  <div className="row">
                    <div className="input-field col s12">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                        onBlur={() => handleFieldBlur("email")}
                        value={userFormData.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {touchedFields.email && !userFormData.email && "Email is required!"}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <Form.Label htmlFor="password">Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        onChange={handleInputChange}
                        onBlur={() => handleFieldBlur("password")}
                        value={userFormData.password}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {touchedFields.password && !userFormData.password && "Password is required!"}
                      </Form.Control.Feedback>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <Button
                        disabled={!(userFormData.email && userFormData.password)}
                        type="submit"
                        variant="success"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
