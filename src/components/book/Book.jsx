import { Link } from "react-router-dom";

function Book({ book }) {
  const { bookName, author, image, rating, category, tags, bookId } = book;
  return (
    <Link
      to={`/book/${bookId}`}
      key={book.bookId}
      className="card bg-orange-200 w-96 shadow-xl"
    >
      <figure className="px-10 pt-10">
        <img src={book.image} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center text-black">
        <h2 className="card-title">{book.bookName}</h2>
        <p>{book.author}</p>
      </div>
    </Link>
  );
}

export default Book;
