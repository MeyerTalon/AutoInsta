import React, { useState } from "react";

function MakePost() {
  const [image, setImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedInterval, setSelectedInterval] = useState("");
  const [username, setUsername] = useState("");
  const [caption, setCaption] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    // Handle post functionality
    console.log("Post clicked!");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card">
            <div className="card-content" style={{ padding: "1rem" }}>
              <h5 className="card-title center-align">Create Post</h5>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <label>Caption</label>
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12">
                  {image && (
                    <img
                      className="responsive-img"
                      src={image}
                      alt="User Image"
                      style={{ marginBottom: "0" }}
                    />
                  )}
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <div
                    className="file-field input-field"
                    style={{
                      marginBottom: "0",
                      width: "50%",
                      margin: "0 auto",
                    }}
                  >
                    <div className="btn">
                      <span>Choose Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </div>
                    <div className="file-path-wrapper">
                      <input
                        className="file-path validate"
                        type="text"
                        style={{
                          borderBottom: "1px solid #9e9e9e",
                          marginBottom: "0",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <label>Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <label>Time</label>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="center-align"
                  />
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12 m6 offset-m3">
                  <label>Interval</label>
                  <select
                    className="browser-default"
                    value={selectedInterval}
                    onChange={(e) => setSelectedInterval(e.target.value)}
                    style={{ width: "50%", margin: "0 auto" }}
                  >
                    <option value="">Choose Interval</option>
                    <option value="1 day">1 day</option>
                    <option value="1 week">1 week</option>
                    <option value="1 month">1 month</option>
                    <option value="Every Other Month">Every Other Month</option>
                    <option value="6 months">6 months</option>
                    <option value="1 year">1 year</option>
                  </select>
                </div>
              </div>
              <div className="row center-align">
                <div className="col s12" style={{ marginBottom: "0" }}>
                  <button
                    className="btn"
                    onClick={handlePost}
                    disabled={
                      !image ||
                      !selectedDate ||
                      !selectedTime ||
                      !selectedInterval ||
                      !username ||
                      !caption
                    }
                    style={{ marginBottom: "0" }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MakePost;
