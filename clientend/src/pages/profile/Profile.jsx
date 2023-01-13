import React, { useEffect, useState } from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feedbar from "../../components/feed/Feed";

const Profile = () => {
  const ProF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  
  useEffect(() => {
    console.log("Feed render....");
    const fetchUser = async () => {
      const resp = await axios.get(`/users/${post.userId}`);
      setUser(resp.data);
      // return resp.data;
    };
    fetchUser();
  }, [post.userId]); // usimg [] feed component will render only once

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={`${ProF}/post/coral.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${ProF}/person/6.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Ranveer singh</h4>
              <span className="profileInfoDesc">Hello friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feedbar username />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
