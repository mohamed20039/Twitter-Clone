import React, { useState } from "react";
import userSlice from "../../Features/userSlice";
import { useSelector } from "react-redux";
import { HiOutlinePhotograph } from "react-icons/hi";
import { AiOutlineGif } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Addpost } from "../../Features/postSlice";
const CreatePost = () => {
  const user = useSelector((state) => state.user.value);
  const fileInputRef = useRef([]);

  const [postImage, setPostImage] = useState<FileList | undefined>(undefined);
  const [postContent, setPostContent] = useState("");

  // console.log(postImage);

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-xl font-semibold">Home</h1>
      <div className="mt-10 flex gap-4">
        <img
          src={user.photo}
          alt=""
          className="rounded-full w-10 h-10 cursor-pointer"
        />
        <input
          type="text"
          placeholder="What's happening?!"
          className="outline-none"
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-3">
          <div className="cursor-pointer">
            <label htmlFor="img">
              <HiOutlinePhotograph />
            </label>

            <input
              type="file"
              id="img"
              className="hidden"
              onChange={(e) => setPostImage(e.target.files[0])}
            />
          </div>
          <AiOutlineGif />
          <BsEmojiSmile />
        </div>
        <button
          className="bg-[#1197f0] flex items-center px-6 py-2 text-white rounded-full "
          onClick={() =>
            dispatch(Addpost({ content: postContent, imageUrl: postImage }))
          }
        >
          TWEET
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
