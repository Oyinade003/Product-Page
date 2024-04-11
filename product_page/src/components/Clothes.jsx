import React, { useRef } from "react";
import styles from "../styles/Cloth.module.css";

import star from "../assets/Star 1.png";
import tees from '../assets/plaintees.png'
import cargopant  from '../assets/cargo_pants.png'
import hoodie  from '../assets/products-clothes.png'
import bedspread from '../assets/bedspread.png'

const clothData = [
  {
    clothImage: tees,
    clothName: "Plain Tee",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    clothImage: hoodie,
    clothName: "Hoodie ",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    clothImage: cargopant,
    clothName: "Cargo Pant",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    clothImage: bedspread,
    clothName: "Bedspread",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const ClothCard = ({ clothImage, clothName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.clothCard}>
      <div className={styles.cloths}>
        <img src={clothImage} alt={`${clothName} image`} className={styles.clothImage} />
        <div className={styles.clothcontent}>
          <p className={styles.clothName}> <b>{clothName}</b></p>
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

const ClothList = () => {
  const clothListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = clothListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
    clothListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.clothListContainer}>
      <h2> Clothes & Thrifts </h2>
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
      <div className={styles.clothList} ref={clothListRef}>
        {clothData.map((cloth, index) => (
          <ClothCard
            key={index}
            clothImage={cloth.clothImage}
            clothName={cloth.clothName}
            price={cloth.price}
            rating={cloth.rating}
            deliveryTime={cloth.deliveryTime}
            deliveryNote={cloth.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothList;