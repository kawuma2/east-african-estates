import React from "react";
import Asideblog from "../components/Asideblog";
import SingleBlog from "./SingleBlog";

export default function Bloginfo() {
  return (
    <>
      <div className="Blog-page">
        <SingleBlog />
        <Asideblog />
      </div>
    </>
  );
}
