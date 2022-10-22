import React from 'react'

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class='bx bx-briefcase-alt-2 about_icons' ></i>
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">0 years working</span>
      </div>

      <div className="about_box">
        <i class='bx bx-code-alt about_icons'></i>
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">3 Projects</span>
      </div>

      <div className="about_box">
        <i class='bx bx-support about_icons' ></i>
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 15/5</span>
      </div>
    </div>
  );
};

export default Info;