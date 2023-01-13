import React from "react";
import "./online.css";
const Online = ({ user }) => {
  const ProF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={ProF + user?.profilePicture}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user?.userName}</span>
    </li>
  );
};

export default Online;
