import React from 'react';
import './CaptionChange.css'; // CSS for hover effect

// Component to display an image that links to a full-width version in a new tab
const LinkedImageDesktop = ({ thumbnailSrc, fullImageSrc, altText, captionText, imageStyles}) => {
  return (
    <a className='thumbnail-desktop' href={fullImageSrc} target="_blank" rel="noopener noreferrer">
      <div className='thumbnails' > 
        <img className= 'desktops'  src={thumbnailSrc} alt={altText} styles= { imageStyles} />
        <div className='captions'>{captionText}</div> {/* The caption text */}
      </div>
    </a>
  );
};

export default LinkedImageDesktop;