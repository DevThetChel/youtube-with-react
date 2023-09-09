import "../app.css";
import { videoContents } from "../data";

const ContentSection = () => {
  return (
    <div className="preview-section">
      {videoContents.map((content) => {
        const {
          id,
          thumbnail,
          channelProfile,
          videoTitle,
          channelName,
          detail,
        } = content;
        return (
          <div key={id} className="video-container">
            <div className="video">
              <img className="thumbnail" src={thumbnail} alt="" />
            </div>
            <div className="video-detail">
              <img src={channelProfile} alt="" className="channel-profile" />
              <div className="video-info">
                <p className="video-title">{videoTitle}</p>
                <p>{channelName}</p>
                <p>{detail}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
