import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { SAVE_POST } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
import { savePostIds, getSavedPostIds } from '../utils/localStorage';


function MakePost() {

  const [imageFile, setImageFile] = useState();
  const [image, setImage] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedInterval, setSelectedInterval] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [instaPassword, setInstaPassword] = useState("");

  const [savedPostIds, setSavedPostIds] = useState(getSavedPostIds());

  const [savePost, { error }] = useMutation(SAVE_POST);
  const { loading, data } = useQuery(GET_ME);

  const userData = data?.me || {};

  useEffect(() => {
    return () => savePostIds(savedPostIds);
  });

  const handlePost = async () => {
    // Handle post functionality
    console.log(caption);
    console.log(image);
    console.log(title);
    console.log(selectedDate);
    console.log(selectedTime);
    console.log(selectedInterval);

    const postToSave = {
      caption: caption,
      imageFile: image,
      title: title,
      time: selectedTime,
      date: selectedDate,
      interval: selectedInterval,
    };

    const postDataInput = {
      postData: postToSave,
      instaPassword: instaPassword
    };

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await savePost({
        variables: { ...postDataInput },
      });
      setSavedPostIds([...savedPostIds, postToSave._id]);
      setImage("");
      setSelectedDate("");
      setSelectedTime("");
      setSelectedInterval("");
      setTitle("");
      setCaption("");
      setInstaPassword("");
    } catch(error) {
      console.log(error);
    }

  };


  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Tsukimi+Rounded:wght@300&display=swap');
      </style>
      <div className="container">
        <div className="row">
          <div className="col s12 m8 offset-m2">
            <div className="card">
              <div className="card-content" style={{ padding: "1rem" }}>
                <h5 className="card-title center-align" style={{ fontFamily: 'Tsukimi Rounded, sans-serif' }}>Create Post</h5>
                <div className="row center-align">
                  <div className="col s12 m6 offset-m3">
                    <label>Instagram Password</label>
                    <input
                      type="password"
                      value={instaPassword}
                      onChange={(e) => setInstaPassword(e.target.value)}
                      className="center-align"
                    />
                  </div>
                </div>
                <div className="row center-align">
                  <div className="col s12 m6 offset-m3">
                    <label>Title</label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
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
                  <div className="col s12 m6 offset-m3">
                    <label>Image URL</label>
                    <input
                      type="text"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
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
                      <option value="Once">Just Once</option>
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
                        !title ||
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
    </>
  );
}

export default MakePost;
