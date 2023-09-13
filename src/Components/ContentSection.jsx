import { useState } from "react";
import "../css/contentsection.css";
import { videoContents } from "../data";
import VideoComponent from "./Video";

const ContentSection = ({ isSideBarExpanded }) => {
  const [currentlyHoveredId, setCurrentlyHoveredId] = useState(null);

  const onHover = (id) => {
    setCurrentlyHoveredId(id);
  };

  return (
    <div
      className={`${
        isSideBarExpanded ? "preview-repositioned" : "preview-section"
      }`}
    >
      {videoContents.map((content) => {
        const {
          id,
          thumbnail,
          channelProfile,
          videoTitle,
          channelName,
          detail,
          video,
        } = content;
        return (
          <div key={id} className="video-container">
            <VideoComponent
              thumbnail={thumbnail}
              video={video}
              onHover={onHover}
              currentlyHoveredId={currentlyHoveredId}
              id={id}
            />

            <div className="video-detail">
              <img src={channelProfile} alt="" className="channel-profile" />

              <div className="video-info">
                <p className="video-title">{videoTitle}</p>
                <p className="channel-name">{channelName}</p>
                <p className="video-date">{detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
