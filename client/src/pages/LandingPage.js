import React from "react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <div className="container">
        <section className="hero">
          <div className="center-align">
            <div className="">
              <img
                className="circle responsive-img"
                src="https://s.tmimgcdn.com/scr/800x500/301700/community-network-and-social-health-logo-icon-design-template-v-8_301741-original.jpg"
                alt="Description of the image"
              />
            </div>
          </div>
          <div className="row hero-content">
            <div className="row">
              <div className="center-align">
                <h1>
                  <span className="flow-text">
                    <i className="large material-icons">AutoInsta</i>
                  </span>
                </h1>
              </div>
              <div className="col s6 offset-s3 center-align">
                <span className="flow-text">
                  Our mission is to provide an efficient and user-friendly app
                  that empowers individuals to schedule and automate their
                  Instagram posts. By offering a platform that enables users to
                  create and schedule their posts in advance, we aim to
                  eliminate the risk of forgetting important content and
                  minimize the time spent on repetitive posting tasks. Our goal
                  is to streamline the Instagram posting process, allowing users
                  to focus on their creativity and engagement with their
                  audience, ultimately enhancing their overall social media
                  experience.<br></br>
                </span>
                <Link to="/contact">
                  <a
                    href="#!"
                    className="center-align waves-effect waves-light btn"
                  >
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;