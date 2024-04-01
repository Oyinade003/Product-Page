import React, { useRef } from "react";
import styles from "../styles/Book.module.css";

import star from "../assets/Star 1.png";
import notebook from '../assets/notebooks.png';
import planner from "../assets/planner.png";
import novel from "../assets/novel.png";
import textbooks from "../assets/product-books.png";

const bookData = [
  {
    bookImage: notebook,
    bookName: "Notebooks",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    bookImage: novel,
    bookName: "Novels",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    bookImage: textbooks,
    bookName: "Textbook",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    bookImage: planner,
    bookName: "Planner",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const BookCard = ({ bookImage, bookName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.BookCard}>
      <div className={styles.books}>
        <img src={bookImage} alt={`${bookName} image`} className={styles.bookImage} />
        <div className={styles.bookcontent}>
          <p className={styles.bookName}> <b>{bookName}</b></p>
          <p> {price}</p>
          <p> {deliveryTime} </p>
          <div className={styles.deliveryData}>
            <p>{deliveryNote}</p>
            <div className={styles.rating}>
              <p>{rating}</p>
              <img src={star} className={styles.star} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookList = () => {
  const bookListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = bookListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
      bookListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.bookListContainer}>
      <h2> Books </h2>
      <div className={styles.scrollContainer}>
        <button
          className={`${styles.scrollButton} ${styles.leftButton}`}
          onClick={() => handleScroll("left")}
          aria-label="Scroll Left"
        >
          &lt;
        </button>
        <button
          className={`${styles.scrollButton} ${styles.rightButton}`}
          onClick={() => handleScroll("right")}
          aria-label="Scroll Right"
        >
          &gt;
        </button>
      </div>
      <div className={styles.bookList} ref={bookListRef}>
        {bookData.map((book, index) => (
          <BookCard
            key={index}
            bookImage={book.bookImage}
            bookName={book.bookName}
            price={book.price}
            rating={book.rating}
            deliveryTime={book.deliveryTime}
            deliveryNote={book.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;