import React, { useRef } from "react";
import styles from "../styles/Footwear.module.css";

import star from "../assets/Star 1.png";
import crocs from '../assets/crocs.png';
import boots from '../assets/boots.png';
import heels from '../assets/heels.png';
import sandal from '../assets/sandals.png';

const footwearData = [
  {
    footwearImage: crocs,
    footwearName: "Crocs",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    footwearImage: heels,
    footwearName: "Heels",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    footwearImage: boots,
    footwearName: "Boots",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    footwearImage: sandal,
    footwearName: "Sandal",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const FootwearCard = ({ footwearImage, footwearName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.FootwearCard}>
      <div className={styles.footwears}>
        <img src={footwearImage} alt={`${footwearName} image`} className={styles.footwearImage} />
        <div className={styles.footwearcontent}>
          <p className={styles.footwearName}> <b>{footwearName}</b></p>
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

const FootwearList = () => {
  const footwearListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = footwearListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
      footwearListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.footwearListContainer}>
      <h2> Footwears </h2>
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
      <div className={styles.footwearList} ref={footwearListRef}>
        {footwearData.map((footwear, index) => (
          <FootwearCard
            key={index}
            footwearImage={footwear.footwearImage}
            footwearName={footwear.footwearName}
            price={footwear.price}
            rating={footwear.rating}
            deliveryTime={footwear.deliveryTime}
            deliveryNote={footwear.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default FootwearList;