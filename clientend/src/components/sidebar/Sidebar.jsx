import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Message,
  PlayCircleFilled,
  Group,
  Bookmarks,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import { Users } from "../../dummyData";

const Sidebar = () => {
  return (
    <>
      <div className="sidebarContainer">
        {/* sidebar wrapper */}
        <div className="sidebarWrapper">
          {/* sidebar list wrapper */}
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarListIcon" />
              <span className="sidebarItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Message className="sidebarListIcon" />
              <span className="sidebarItemText">Chats</span>
            </li>{" "}
            <li className="sidebarListItem">
              <PlayCircleFilled className="sidebarListIcon" />
              <span className="sidebarItemText">Videos</span>
            </li>{" "}
            <li className="sidebarListItem">
              <Group className="sidebarListIcon" />
              <span className="sidebarItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmarks className="sidebarListIcon" />
              <span className="sidebarItemText">Bookmarks</span>
            </li>{" "}
            <li className="sidebarListItem">
              <HelpOutline className="sidebarListIcon" />
              <span className="sidebarItemText">Questions</span>
            </li>{" "}
            <li className="sidebarListItem">
              <WorkOutline className="sidebarListIcon" />
              <span className="sidebarItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarListIcon" />
              <span className="sidebarItemText">Events</span>
            </li>{" "}
            <li className="sidebarListItem">
              <School className="sidebarListIcon" />
              <span className="sidebarItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className="sidebarHr" />
          {/* online frined class ul */}
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <CloseFriend key={u.id} user={u} />
            ))}
          </ul>
          {/* online frined class ul */}

          {/* sidebar list wrapper ends here*/}
        </div>
        {/* sidebar wrapper ends here */}
      </div>
    </>
  );
};

export default Sidebar;
