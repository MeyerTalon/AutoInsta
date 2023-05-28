import React, { useState } from "react";

function ContactUs() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // necessary logic for handling the form submission
    // access the form data using the username, email, and message state variables
    console.log("Submitted:", { username, email, message });
    // Reset the form fields
    setUsername("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <span className="card-title">Contact Us</span>
                <div className="row">
                  <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="username"
                          type="text"
                          className="validate"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label htmlFor="username">Username</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="email"
                          type="email"
                          className="validate"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <textarea
                          id="message"
                          className="materialize-textarea"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <button
                          className="btn waves-effect waves-light"
                          type="submit"
                          name="action"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
