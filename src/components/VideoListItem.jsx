import React from 'react';

const VideoListItem = ({video}) => {
  // "props.video" is identical to "{video}" 
  // The first object in the arguments array has a property video - assign that to "video". 
  console.log(video);
  return (<li>Video</li>);
};

export default VideoListItem;