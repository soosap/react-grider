import React from 'react';
import VideoListItem from './VideoListItem';

// In a function-based component the props object is an argument. In a class-based component props are available anywhere in any method we 
// define as "this.props". If we refactor a component from a function-based to a class-based one, we need to replace "props" w/ "this.props".
const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;