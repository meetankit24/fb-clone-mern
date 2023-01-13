import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
const Topbar = () => {
  const ProF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <div className="topbarContainer">
        {/* div-topbarLeft */}
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span lassName="logo">facebook</span>
          </Link>
        </div>
        {/* div-topbarLeft ends here*/}

        {/* div topbar Center */}

        <div className="topbarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friend, post or videos"
              className="searchInput"
            />
          </div>
        </div>
        {/* div topbar Center ends here*/}

        {/* div topbar right */}
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home </span>
            <span className="topbarLink">Timeline </span>
          </div>

          <div className="topbarIcons">
            <div className="topbarIconItem">
              <Person />
              <span className="topbarIconBadge">4</span>
            </div>
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">4</span>
            </div>
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">4</span>
            </div>
          </div>
          <img src={`${ProF}person/1.jpg`} alt="" className="topbarImg" />
        </div>
        {/* div topbar right ends here*/}
      </div>
    </>
  );
};

export default Topbar;
