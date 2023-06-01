import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

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
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Login</span>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleFormSubmit}
                >
                  <Alert
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant="danger"
                  >
                    Something went wrong with your login credentials!
                  </Alert>
                  <div className="row">
                    <div className="input-field col s12">
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        onChange={handleInputChange}
                        value={userFormData.email}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Email is required!
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
                        value={userFormData.password}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Password is required!
                      </Form.Control.Feedback>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <Button
                        disabled={
                          !(userFormData.email && userFormData.password)
                        }
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
