import React from "react";
import Typical from "react-typical";
import profileImg from "../../assets/profile.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="header-container">
      {/* header content */}
      <div className="header-content">
        <h1>Greetings!</h1>
        <h2 className="fullname">It's Bhakti Balanse</h2>
        <h2>
          I'm a {""}
          <Typical
            steps={[
              "Full Stack Developer 🚀",
              1000,
              "Coder 🎓",
              1000,
              "Writer/Poet 📖",
              1000,
              
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>
        <p>
        Hey! I'm a Full Stack Developer who loves bringing ideas to life with code. From user-friendly interfaces to powerful back-end systems, I make tech work seamlessly. I'm also a C++ enthusiast. Check out my portfolio to see how I mix tech skills with creativity for cool digital solutions.
        </p>
        {/* payment links */}
        <div className="header-payment-container">
          <button>Hire Me</button>
          <i className="fa-brands fa-paypal"></i>
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
        </div>
      </div>
      {/* Image container */}
      <div className="profile-img-container">
        <img src={profileImg} alt="" />
        <div className="circle-1"></div>
        <div className="circle-2"></div>
      </div>
    </div>
  );
};

export default Header;
