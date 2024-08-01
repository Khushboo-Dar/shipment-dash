import React from "react";
import "../Dashboard.css";
const Announcements = () => {
  return (
    <div className="announcements">
      <h3>Announcements</h3>
      <p>Soon you will see latest announcements/new in this section.</p>
      <div className="announcement-image">
        <div className="back-circle">
          <img src="speaker.png" alt="Speaker" className="speaker" />
        </div>
      </div>
    </div>
  );
};


export default Announcements;