import React from "react";
import "./share.css";
import {
  PermMedia,
  Room,
  Label,
  EmojiEmotions,
} from "@material-ui/icons";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        {/* share text options button */}
        <div className="shareTop">
          <img src="/assets/person/1.jpg" alt="" className="shareProfileImg" />
          <input
            type="text"
            placeholder="What's in your mind Ranveer?"
            className="shareInput"
          />
        </div>
        {/* share text options ends here */}

        <hr className="shareHr" />

        {/* share options button */}
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText"> Photos or videos</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText"> Tag</span>
            </div>

            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText"> Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText"> Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
        {/* share options button ends here*/}
      </div>
    </div>
  );
};

export default Share;
