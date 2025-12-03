import React from 'react';
import '../styles/YouTubeShort.css';

const YouTubeShort = () => {
  return (
    <div className="youtube-short-container">
      <div className="short-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/jK9jvUaxyeU?si=vjTgi_9EIljy4s-N"
          title="CollectionR YouTube Short"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeShort;
