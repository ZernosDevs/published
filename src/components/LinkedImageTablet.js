import React from 'react';
import './CaptionChange.css'; // CSS for hover effect

// Component to display an image that links to a full-width version in a new tab
const LinkedImageTablet = ({ thumbnailSrc, fullImageSrc, altText, captionText, imageStyles}) => {
  return (
    <a className='thumbnail-tablet' href={fullImageSrc} target="_blank" rel="noopener noreferrer">
      <div className='thumbnails' styles= {imageStyles}> 
        <img className= 'tablets' src={thumbnailSrc} alt={altText} />
        <div className="captions">{captionText}</div> {/* The caption text */}
      </div>
    </a>
  );
};

export default LinkedImageTablet;