import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const post = useSelector((state) => state.post.value);
  const user = useSelector((state) => state.user.value);

  console.log(post.imageUrl);
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3">
        <img src={user.photo} alt="" className="rounded-full w-8 h-8" />
        <div className="flex gap-2">
          <p className="text-xs font-semibold">{user.name}</p>
          <p className="text-xs">@{user.name}</p>
        </div>
      </div>

      <div className="">
        <h1>{post.content}</h1>
        {post.imageUrl && <img src={URL.createObjectURL(post.imageUrl)} />}
      </div>
    </div>
  );
};

export default Post;
