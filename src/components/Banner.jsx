import React from "react";
import banner from "../assets/images/banner-2.jpg";

function Banner() {
  return (
    <div className="bg-orange-200 my-4 rounded-lg flex flex-col-reverse lg:flex-row justify-around items-center">
      <div className="p-6 lg:p-28">
        <h1 className="text-[2.2rem] font-bold">
          Find Your Next Favorite Book at Book Heaven
        </h1>
        <button className="btn text-white bg-red-700 font-bold mt-4">
          Buy Book
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img className="h-96 pr-6 lg:pr-12" src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
