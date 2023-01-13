import React, { useState, useEffect } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
// import { Users } from "../../dummyData";

export default function Post({ post }) {
  const [like, setLike] = useState(post?.like.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  const ProF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

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
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture ?? ProF + "person/noavatar.png"}
                alt=""
              /> 
            </Link>

            <span className="postUserName">{user.userName}</span>
            <span className="postDate"> {format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={ProF + post?.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
              className="postIcon"
            />
            <img
              src="/assets/like.jpg"
              onClick={likeHandler}
              alt=""
              className="postIcon"
            />
            <span className="postlikeCounter">{like} people and others</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
