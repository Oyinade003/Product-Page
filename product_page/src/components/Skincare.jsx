import React, { useRef } from "react";
import styles from "../styles/Skincare.module.css";

import star from "../assets/Star 1.png";
import facewash from '../assets/face-wash.jfif';
import moisturizer from "../assets/moisturizer.jfif";
import ordserum from "../assets/ord-serum.jfif";
import vitcserum from "../assets/vitc-serum.jfif";

const skincareData = [
  {
    skincareImage: moisturizer,
    skincareName: "Moisturizer",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    skincareImage: ordserum,
    skincareName: "Ordinary Serum",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    skincareImage: moisturizer,
    skincareName: "Moisturizer",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    skincareImage: facewash,
    skincareName: "Simple Face Wash",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const SkincareCard = ({ skincareImage, skincareName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.SkincareCard}>
      <div className={styles.skincares}>
        <img src={skincareImage} alt={`${skincareName} image`} className={styles.skincareImage} />
        <div className={styles.skincarecontent}>
          <p className={styles.skincareName}> <b>{skincareName}</b></p>
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

const SkincareList = () => {
  const skincareListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = skincareListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
      skincareListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.skincareListContainer}>
      <h2> Skincare Products </h2>
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
      <div className={styles.skincareList} ref={skincareListRef}>
        {skincareData.map((skincare, index) => (
          <SkincareCard
            key={index}
            skincareImage={skincare.skincareImage}
            skincareName={skincare.skincareName}
            price={skincare.price}
            rating={skincare.rating}
            deliveryTime={skincare.deliveryTime}
            deliveryNote={skincare.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default SkincareList;