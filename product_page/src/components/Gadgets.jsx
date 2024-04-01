import React, { useRef } from "react";
import styles from "../styles/Gadget.module.css";

import star from "../assets/Star 1.png";
import laptop from '../assets/laptop.png';
import powerbank from "../assets/powerbank.png";
import earpod from "../assets/earpod.jfif";
import smartwatch from "../assets/smartwatch.jfif";

const gadgetData = [
  {
    gadgetImage: laptop,
    gadgetName: "Laptop",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    gadgetImage: powerbank,
    gadgetName: "Powerbank",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    gadgetImage: smartwatch,
    gadgetName: "Smart Watch",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    gadgetImage: earpod,
    gadgetName: "Earpods",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const GadgetCard = ({ gadgetImage, gadgetName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.GadgetCard}>
      <div className={styles.gadgets}>
        <img src={gadgetImage} alt={`${gadgetName} image`} className={styles.gadgetImage} />
        <div className={styles.gadgetcontent}>
          <p className={styles.gadgetName}> <b>{gadgetName}</b></p>
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

const GadgetList = () => {
  const gadgetListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = gadgetListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
      gadgetListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.gadgetListContainer}>
      <h2> Gadgets </h2>
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
      <div className={styles.gadgetList} ref={gadgetListRef}>
        {gadgetData.map((gadget, index) => (
          <GadgetCard
            key={index}
            gadgetImage={gadget.gadgetImage}
            gadgetName={gadget.gadgetName}
            price={gadget.price}
            rating={gadget.rating}
            deliveryTime={gadget.deliveryTime}
            deliveryNote={gadget.deliveryNote}
          />
        ))}
      </div>
    </div>
  );
};

export default GadgetList;