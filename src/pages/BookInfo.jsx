import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExistsOnCart(book) {
    return cart.find((cartBook) => +cartBook.id === +book.id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <a href="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </a>
              <a href="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </a>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="books_selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book_selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book_summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ipsum minus, repellat, neque esse perferendis
                    adipisci reprehenderit ex eum, laborum odio est fugit.
                    Placeat quidem autem, illum facere esse hic!
                  </p>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus ipsum minus, repellat, neque esse perferendis
                    adipisci reprehenderit ex eum, laborum odio est fugit.
                    Placeat quidem autem, illum facere esse hic!
                  </p>
                </div>
                {bookExistsOnCart(book) ? (
                  <a href={`/cart`} className="book__link">
                    <button className="btn">Checkout</button>
                  </a>
                ) : (
                  <button className="btn" onClick={() => addBookToCart(book)}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__sellected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
