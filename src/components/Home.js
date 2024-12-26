import React, { useState } from 'react';

function Dashboard({ profile }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="dashboard">
      <div className="image-section">
        <div className={`image-wrapper ${isImageLoaded ? 'loaded' : ''}`}>
          {!isImageLoaded && (
            <div className="image-preloader">
              <div className="spinner"></div>
            </div>
          )}
          <img
            src={profile.image}
            alt="Profile"
            onLoad={() => setIsImageLoaded(true)}
            style={isImageLoaded ? { display: 'block' } : { display: 'none' }}
          />
        </div>
      </div>
      <div className="profile-section">
        <h1>Hello, I am</h1>
        <h2>{profile.name}</h2>
        <h3>
          A <span className="highlight">{profile.title}</span>
        </h3>
        <p>{profile.description}</p>
        <a href={profile.cv} download={profile.cvName}   className="cv-btn">
          Access my CV here! 
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
