import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">
          <strong className="media-heading">{video.snippet.title}</strong>
          <p className="media-desc">{video.snippet.description}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;