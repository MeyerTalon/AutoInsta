import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Signup() {
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...userFormData },
      });

      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({ username: "", email: "", password: "" });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Signup</span>
                <div className="row">
                  <Form
                    noValidate
                    validated={validated}
                    onSubmit={handleFormSubmit}
                  >
                    <div className="row">
                      <div className="input-field col s12">
                        <Form.Control
                          id="username"
                          type="text"
                          name="username"
                          value={userFormData.username}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control.Feedback type="invalid">
                          Username is required!
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <Form.Control
                          id="email"
                          type="email"
                          name="email"
                          value={userFormData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control.Feedback type="invalid">
                          Email is required!
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <Form.Control
                          id="password"
                          type="password"
                          name="password"
                          value={userFormData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <Form.Label htmlFor="password">Password</Form.Label>
                        <Form.Control.Feedback type="invalid">
                          Password is required!
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <Button
                          className="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                          disabled={
                            !(
                              userFormData.username &&
                              userFormData.email &&
                              userFormData.password
                            )
                          }
                        >
                          Signup
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
