import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  // "props.video" is identical to "{video}" 
  // The first object in the arguments array has a property video - assign that to "video". 
  console.log(video);

  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
      </div>
    </li>
  );
};

export default VideoListItem;