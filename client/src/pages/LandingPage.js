import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <a href="#!" className="brand-logo">
              AutoInsta
            </a>
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Make Post</a>
              </li>
              <li>
                <a href="#!">Contact Us</a>
              </li>
              <li>
                <a href="#!" className="waves-effect waves-light btn">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-nav">
          <li>
            <a href="#!">Home</a>
          </li>
          <li>
            <a href="#!">Make Post</a>
          </li>
          <li>
            <a href="#!">Contact Us</a>
          </li>
          <li>
            <a href="#!" className="waves-effect waves-light btn">
              Login
            </a>
          </li>
        </ul>

        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              rutrum massa quis magna bibendum, sed vulputate metus semper.
            </p>
            <a href="#!" className="waves-effect waves-light btn">
              Learn More
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
