import { useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {

  const bookDetails = useLoaderData();
  const id = useParams();
  console.log("ID: ", id);
  console.log(bookDetails);

  const {
    bookName,
    author,
    image,
    review,
    category,
    rating,
    puhlisher,
    yearOfPublishing,
  } = bookDetails;

  return (
    <div className="mx-4 mt-4 lg:mx-32 lg:flex justify-between gap-8">
      <div className="bg-[#0D0D0D0D] w-full flex justify-center items-center">
        <img src={bookDetails.image} alt="" />
      </div>
      <div>
        <h2 className="text-3xl font-bold my-3">{bookDetails.bookName}</h2>
        <p className="mb-3">By: {bookDetails.author}</p>
        <hr />
        <p className="my-3">{bookDetails.category}</p>
        <hr />
        <p className="my-3">
          <span className="font-bold">Review:</span>
          {bookDetails.review}
        </p>
        <hr />
        <p className="mt-3">
          Publisher:
          <span className="font-bold" style={{ marginLeft: "2em" }}>
            {bookDetails.publisher}
          </span>
        </p>
        <p className="mt-3">
          Year of Publishing:
          <span className="font-bold" style={{ marginLeft: "2em" }}>
            {bookDetails.yearOfPublishing}
          </span>
        </p>
        <p className="mt-3">
          Rating:
          <span className="font-bold" style={{ marginLeft: "2em" }}>
            {bookDetails.rating}
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
