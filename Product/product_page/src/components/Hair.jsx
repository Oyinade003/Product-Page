import React, { useRef } from "react";
import styles from "../styles/Hair.module.css";

import star from "../assets/Star 1.png";
import scrunchies from '../assets/hair_scrunchies.png';
import haircream from "../assets/haircare.png";
import hairdye from "../assets/hairdye.png";
import wig from "../assets/wig.png";

const hairData = [
  {
    hairImage: scrunchies,
    hairName: "Hair Scrunchies",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    hairImage: hairdye,
    hairName: "Hair Dye",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    hairImage: wig,
    hairName: "Wig",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    hairImage: haircream,
    hairName: "Hair Cream",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const HairCard = ({ hairImage, hairName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.HairCard}>
      <div className={styles.hairs}>
        <img src={hairImage} alt={`${hairName} image`} className={styles.hairImage} />
        <div className={styles.haircontent}>
          <p className={styles.hairName}> <b>{hairName}</b></p>
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

const HairList = () => {
  const hairListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = hairListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
      hairListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.hairListContainer}>
      <h2> Haircare Products </h2>
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
      <div className={styles.hairList} ref={hairListRef}>
        {hairData.map((hair, index) => (
          <HairCard
            key={index}
            hairImage={hair.hairImage}
            hairName={hair.hairName}
            price={hair.price}
            rating={hair.rating}
            deliveryTime={hair.deliveryTime}
            deliveryNote={hair.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default HairList;