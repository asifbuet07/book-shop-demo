import { useEffect, useState } from "react";
import Book from "./book";

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://bootcamp-a4-server.vercel.app/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-10">
      {books?.map((bookItem) => (
        <Book book={bookItem} />
      ))}
    </div>
  );
}

export default BookList;
