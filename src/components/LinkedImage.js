import React from 'react';
import './ThumbnailWithLink.css'; // CSS for hover effect

// Component to display an image that links to a full-width version in a new tab
const LinkedImage = ({ thumbnailSrc, fullImageSrc, altText, captionText, imageStyles}) => {
  return (
    <a className='workflow-image' href={fullImageSrc} target="_blank" rel="noopener noreferrer">
      <div className='thumbnail' styles= {imageStyles}> 
        <img src={thumbnailSrc} alt={altText} />
        <div className="caption">{captionText}</div> {/* The caption text */}
      </div>
    </a>
  );
};

export default LinkedImage;