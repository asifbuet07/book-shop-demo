import React, { useContext } from "react";
import BookList from "../components/book/BookList";
import PrivateBookList from "../components/book/PrivateBookList";
import { AuthContext } from "../utils/AuthProvider";

function AllBooksPage() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <BookList />
      {user ? (
        <PrivateBookList />
      ) : (
        console.log("Private Books are not accessable yet!")
      )}
    </div>
  );
}

export default AllBooksPage;
