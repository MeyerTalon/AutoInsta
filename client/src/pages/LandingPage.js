import React from "react";

const LandingPage = () => {
  return (
    <div>
      <div class="container">
        <section className="hero">
          <div class="center-align">
            <div class="">
              <img
                class="circle responsive-img"
                src="https://s.tmimgcdn.com/scr/800x500/301700/community-network-and-social-health-logo-icon-design-template-v-8_301741-original.jpg"
                alt="Description of the image"
              />
            </div>
          </div>
          <div class="row" className="hero-content">
            <div class="row">
              <div class="center-align">
                <h1>
                  <span class="flow-text">
                    <i class="large material-icons">AutoInsta</i>
                  </span>
                </h1>
              </div>
              <div class="col s6 offset-s6">
                <span class="flow-text">
                  Our mission is to provide an efficient and user-friendly app
                  that empowers individuals to schedule and automate their
                  Instagram posts. By offering a platform that enables users to
                  create and schedule their posts in advance, we aim to
                  eliminate the risk of forgetting important content and
                  minimize the time spent on repetitive posting tasks. Our goal
                  is to streamline the Instagram posting process, allowing users
                  to focus on their creativity and engagement with their
                  audience, ultimately enhancing their overall social media
                  experience.
                </span>
                <a
                  class="center-align"
                  href="#!"
                  className="waves-effect waves-light btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
