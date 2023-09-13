import { useEffect, useRef, useState } from "react";
import "../css/contentsection.css";

const VideoComponent = ({
  video,
  thumbnail,
  currentlyHoveredId,
  onHover,
  id,
}) => {
  const ref = useRef(null);

  const play = () => {
    ref.current.play();
  };

  const pauseLoop = () => {
    ref.current.pause();
  };

  const stopVideo = () => {
    ref.current.currentTime = 0;
  };

  useEffect(() => {
    if (currentlyHoveredId === id) {
      play(); // when focused then loop
    } else {
      pauseLoop();
      stopVideo(); // when not focused then pause loop
    }
  }, [currentlyHoveredId]);

  return (
    <>
      <div className="videos">
        <video
          className="video"
          preload="metadata"
          ref={ref}
          autoPlay
          onMouseOver={() => onHover(id)}
          muted={true}
          src={video}
          // poster={currentlyHoveredId === id ? null : thumbnail}
        >
          <source src="video.mp4#t=2.0" type="video/mp4"></source>
        </video>
      </div>
    </>
  );
};

export default VideoComponent;
