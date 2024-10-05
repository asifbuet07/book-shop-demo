import React from "react";
import { Navbar } from "../components/shared/Navbar";
import Banner from "../components/banner";
import BookList from "../components/book/booklist";
import Footer from "../components/shared/Footer";

export const Homepage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Banner />
      <BookList />
      <Footer />
    </div>
  );
};
