import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services-container">
      <div className="services-list-container">
        {/* desc */}
        <div className="services-desc-container">
          <h1>
            A little <span>About Me</span>
          </h1>
          <p>
          Greetings! I'm a Full Stack Developer and C++ coder, navigating the digital landscape with a strong foundation in Data Structures and Algorithms (DSA). Beyond the lines of code, I find solace in crafting poetry that breathes life into words. Whether it's architecting robust systems, optimizing algorithms, or penning down verses, I traverse the realms of logic and creativity. My portfolio reflects this unique intersection, offering a glimpse into the fusion of tech precision and poetic expression. Join me on a journey where the art of coding meets the art of language.          </p>
          <button>Hire Me</button>
        </div>
        {/* item */}
        <div className="service-item-container">
          <div className="services-item">
            <i className="fa-solid fa-code"></i>
            <div className="item-desc">
              <h3>Web Development</h3>
              <p>
              My projects include a dynamic portfolio website, a feature-rich blogging platform, and a full-stack application integrating ChatGPT for enhanced user interaction. Alongside these, I've tackled various small projects during my learning journey, showcasing my continuous commitment to expanding my skill set.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-desktop"></i>
            <div className="item-desc">
              <h3>C++ and DSA</h3>
              <p>
                
I'm a proficient C++ coder with a strong foundation in Data Structures and Algorithms (DSA). Having tackled 200+ coding questions on various platforms, I showcase a commitment to ongoing learning and a knack for problem-solving. My adaptability and continuous practice make me well-equipped for coding challenges.
              </p>
            </div>
          </div>
          <div className="services-item">
            <i className="fa-solid fa-tablet-alt"></i>
            <div className="item-desc">
              <h3>Writing/Poetry</h3>
              <p>
              Coder by day, wordsmith by night—I've penned 50+ poems, blending creativity into every line. Former content writer, award-winning in both writing and stage performances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
