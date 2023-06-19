import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="colz">
              <div className="colz-icon">

              <a href="https://www.facebook.com/profile.php?id=100042756192637" id="face">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100042756192637" id="google">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/anurag_gupta_tcsc/" id="insta">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCTh3mKy9YI0ZJBgzuJ556YQ" id="youtube">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.instagram.com/anurag_gupta_tcsc/" id="twit">
                <i className="fa fa-twitter"></i>
              </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello, I'M <span className="highlighted-text">Anurag</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  {" "}

                  <Typical
                  loop={Infinity}
                  steps={[
                    "Anurag Gupta 📍",
                    1000,
                    "Full Stack Developer 🟠",
                    1000,
                    "CRUD Operation Dev 😎",
                    1000,
                    "DATABASE Dev 🌐",
                    1000,
                    "Cross Platform v 💻",
                    1000,
                    "React/React Native Dev 📱",
                    1000

                  ]}
                  
                  />
                </h1>
                <span className="profile-role-tagline">
                  Knack of Building application with Front-end and Back-end Operations.  

                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">
                {" "}
                Hire Me {" "}
              </button>
              <a href="resume.pdf" download='Anurag resume.pdf'>
                
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
                  <div className="profile-picture-background">

                  </div>
          </div>
        </div>
      </div>
      
    </>
  );
}
