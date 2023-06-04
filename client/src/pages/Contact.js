import React, { useState } from 'react';
import { send } from 'emailjs-com';

function ContactUs() {

  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: 'AutoInsta Team',
    message: '',
    reply_to: '',
  });

  const [sentMessage, setSentMessage] = useState(<p></p>);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // necessary logic for handling the form submission
    // access the form data using the username, email, and message state variables
    console.log("Submitted:", { ...toSend });

    send(
      'service_b95yus9',
      'template_klxxdxr',
      toSend,
      'fKepqLb4KSa9fdlEn'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .then(() => {
        setSentMessage(<p>Your message has been sent to the AutoInsta Team!</p>);
        setToSend({
          from_name: '',
          to_name: 'AutoInsta Team',
          message: '',
          reply_to: '',
        });
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <>
      
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
              <style>
        @import url('https://fonts.googleapis.com/css2?family=Tsukimi+Rounded:wght@300&display=swap');
      </style>
                <span className="card-title" style={{ fontFamily: 'Tsukimi Rounded, sans-serif' }}>Contact Us</span>
                <div className="row">
                  <form className="col s12" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="from_name"
                          type="text"
                          name="from_name"
                          className="validate"
                          value={toSend.from_name}
                          onChange={handleChange}
                        />
                        <label htmlFor="from_name">Name</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="reply_to"
                          type="email"
                          name="reply_to"
                          className="validate"
                          value={toSend.reply_to}
                          onChange={handleChange}
                        />
                        <label htmlFor="reply_to">Email</label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="input-field col s12">
                        <input
                          id="message"
                          type="text"
                          name="message"
                          className="validate"
                          value={toSend.message}
                          onChange={handleChange}
                        />
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
                        {sentMessage}
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