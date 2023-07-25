import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import postSlice from "../../Features/postSlice";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Posts = () => {
  const [postList, setPostList] = useState([]);
  const [likes, setLikes] = useState(true);
  const newPost = useSelector((state) => state.post.value);
  const user = useSelector((state) => state.user.value);

  // console.log(newPost);

  useEffect(() => {
    setPostList([newPost, ...postList]);
    console.log(postList);
  }, [newPost]);

  const handleLike = (postId) => {
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      newLikes[postId] = true;
      return newLikes;
    });
  };

  return (
    <>
      {postList.length > 0 ? (
        postList.map((post, index) => (
          <div className="mt-10 mb-4" key={post.id}>
            <div className="flex items-center gap-3">
              <img src={user.photo} alt="" className="rounded-full w-8 h-8" />
              <div className="flex gap-2">
                <p className="text-xs font-semibold">{user.name}</p>
                <p className="text-xs">@{user.name}</p>
              </div>
            </div>

            <div className="">
              <h1>{post.content}</h1>
              {post.imageUrl && (
                <img src={URL.createObjectURL(post.imageUrl)} width={400} />
              )}
              <button onClick={() => handleLike(post.id)} className="mt-10">
                {likes[post.id] ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </>
  );
};

export default Posts;
