import React, { useRef } from "react";
import styles from "../styles/Bag.module.css";

import star from "../assets/Star 1.png";
import purse from '../assets/purse.png';
import backbag from "../assets/backpack.png";
import laptopbag from "../assets/laptop_bag.png";
import handbag from "../assets/handbag.png";

const bagData = [
  {
    bagImage: purse,
    bagName: "Purse",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    bagImage: backbag,
    bagName: "Backbag",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    bagImage: laptopbag,
    bagName: "Laptop Bag",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    bagImage: handbag,
    bagName: "Hand Bag",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const BagCard = ({ bagImage, bagName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.BagCard}>
      <div className={styles.bags}>
        <img src={bagImage} alt={`${bagName} image`} className={styles.bagImage} />
        <div className={styles.bagcontent}>
          <p className={styles.bagName}> <b>{bagName}</b></p>
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

const BagList = () => {
  const bagListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = bagListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
    bagListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.bagListContainer}>
      <h2> Bags & Backpacks </h2>
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
      <div className={styles.bagList} ref={bagListRef}>
        {bagData.map((bag, index) => (
          <BagCard
            key={index}
            bagImage={bag.bagImage}
            bagName={bag.bagName}
            price={bag.price}
            rating={bag.rating}
            deliveryTime={bag.deliveryTime}
            deliveryNote={bag.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default BagList;