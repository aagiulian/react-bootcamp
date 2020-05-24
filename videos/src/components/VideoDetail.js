import React from "react";

const VideoDetail = ({ video }) => {
  const link = "https://youtube.com/embed/";

  return video ? (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={link + video.id.videoId} />
      </div>
      <div className="ui segment">
        <h4 className="header ui">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default VideoDetail;
