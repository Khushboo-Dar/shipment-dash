import React from 'react';
import './Map.css'; // Ensure to import the CSS file

const googleLogoURL = 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'; // Official Google logo URL

const Map = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83543450972!2d144.9556513153676!3d-37.81732797975175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57702a35a0d54b0!2sVictoria%20Harbour%20Promenade!5e0!3m2!1sen!2sau!4v1614147299000!5m2!1sen!2sau"
        title="Google Maps"
        className="map-iframe"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
      <div className="google-icon">
        <img src={googleLogoURL} alt="Google Logo" />
      </div>
    </div>
  );
};

export default Map;
