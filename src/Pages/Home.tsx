import React from "react";
import SideBar from "../Components/Home/SideBar";
import Post from "../Components/Posts/Post";
import Trend from "../Components/Trends/Trend";
import CreatePost from "../Components/Posts/CreatePost";
import Posts from "../Components/Posts/Posts";

const Home = () => {
  return (
    <div className="flex gap-20 sm:justify-between mx-5 my-2 lg:mx-20 lg:my-5">
      <SideBar />
      <div>
        <CreatePost />
        {/* <Post content="" imageUrl={""} /> */}
        <Posts />
      </div>
      <Trend />
      {/* <Posts /> */}
    </div>
  );
};

export default Home;
