import React from "react";

function Book({ book }) {
  return (
    <div
      key={book.bookId}
      className="card bg-base-300 w-96 shadow-xl cursor-pointer"
    >
      <figure className="px-10 pt-10">
        <img src={book.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{book.bookName}</h2>
        <p>{book.author}</p>
      </div>
    </div>
  );
}

export default Book;
