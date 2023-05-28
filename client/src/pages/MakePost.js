import React from "react";

function MakePost() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <div className="col s12 m6 offset-m3">
            <div className="card">
              <div className="card-content">
                <h5
                  className="card-title"
                  style={{
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                  }}
                >
                  Home Page
                </h5>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  Welcome to AutoInsta!
                </p>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "18px",
                  }}
                >
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
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  User Bio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MakePost;
