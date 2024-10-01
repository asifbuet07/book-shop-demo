import React from "react";
import { Navbar } from "../components/shared/Navbar";
import Banner from "../components/banner";
import BookList from "../components/book/booklist";

export const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <BookList />
    </div>
  );
};
