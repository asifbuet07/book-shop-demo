import React from "react";
import banner from "../assets/images/banner-2.jpg";

function Banner() {
  return (
    <div className="bg-cyan-400 mt-3 mb-6 rounded-lg flex flex-col-reverse lg:flex-row justify-around items-center">
      <div className="px-6 pb-6 lg:px-28">
        <h1 className="text-[2.2rem] font-bold">
          Find Your Next Favorite Book at Book Heaven
        </h1>
        <button className="btn text-red-600 bg-green-300 font-bold mt-4">
          Buy Book
        </button>
      </div>
      <div>
        <img className="rounded-tr-xl rounded-br-xl h-96" src={banner} alt="" />
      </div>
    </div>
  );
}

export default Banner;
