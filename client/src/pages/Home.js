import React from "react";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <h5 className="card-title">Home Page</h5>
                <p>Welcome to AutoInsta!</p>
                <p>
                  <strong>UserName</strong>
                </p>
                <div className="center">
                  {/* <img
                    className="circle"
                    src="user-image.jpg"
                    alt="User Image"
                    width="150"
                    height="150"
                  /> */}
                </div>
                <p>User Bio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
