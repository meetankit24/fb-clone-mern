import React from "react";
import "./closefrnd.css";

export default function CloseFriend({ user }) {
  const ProF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
      <img
        src={ProF + user?.profilePicture}
        alt=""
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{user?.userName}</span>
    </li>
  );
}
