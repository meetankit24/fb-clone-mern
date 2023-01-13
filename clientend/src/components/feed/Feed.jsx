import React, { useEffect } from "react";
import Share from "../share/Share";
import "./feed.css";
// import Post from "../post/Post";
// import { Posts } from "../../dummyData";
import { useState } from "react";
import axios from "axios";

export default function Feed({ username }) {
  const [post, setPost] = useState([]);

  useEffect(() => {
    console.log("Feed render....");
    const fetchPOsts = async () => {
      const resp = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/606056364632565343");
      setPost(resp.data);
    };
    fetchPOsts();
  }, [username]); // usimg [] feed component will render only once

  return (
    <>
      <div className="feed">
        <div className="feedWrapper">
          <Share />

          {post.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
}
