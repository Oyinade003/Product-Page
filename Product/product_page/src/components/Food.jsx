import React, { useRef } from "react";
import styles from "../styles/Food.module.css";

import star from "../assets/Star 1.png";
import cake from '../assets/cake.png';
import pizza from "../assets/pizza.png";
import sharwama from "../assets/sharwama.png";
import jollofRice from "../assets/products-food.png";

const foodData = [
  {
    foodImage: cake,
    foodName: "Red Velvet",
    price: "₦2,500",
    rating: 4.2,
    deliveryNote: 'Delivery Charges Apply',
    deliveryTime: "15-20 minutes",

  },
  {
    foodImage: pizza,
    foodName: "Pepperonni Pizza",
    price: "₦4,000",
    rating: 3.00,
    deliveryTime: "15-20 minutes",
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    foodImage: sharwama,
    foodName: "Sharwama",
    price: "₦3,200",
    rating: 4.00,
    deliveryTime: "5-15 minutes",
    deliveryNote: 'Free Delivery',
  },
  {
    foodImage: jollofRice,
    foodName: "Jollof Rice",
    price: "₦2,000",
    rating: 2.4,
    deliveryTime: "5 minutes",
    deliveryNote: 'Free Delivery',
  },
  // Add more vendor data objects here
];

const FoodCard = ({ foodImage, foodName, price, rating, deliveryTime, deliveryNote }) => {
  return (
    <div className={styles.FoodCard}>
      <a href="/">
      <div className={styles.foods}>
        <img src={foodImage} alt={`${foodName} image`} className={styles.foodImage} />
        <div className={styles.foodcontent}>
          <p className={styles.foodName}> <b>{foodName}</b></p>
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
      </a>
    </div>
  );
};

const FoodList = () => {
  const foodListRef = useRef(null);

  const handleScroll = (direction) => {
    const containerWidth = foodListRef.current.offsetWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth : containerWidth;
    foodListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div>
    <div className={styles.foodListContainer}>
      <div className={styles.foodHeaderContainer}>
      <h2> Foods and Snacks </h2>
      <a href="https://product-page-u6mz.vercel.app/" className={styles.viewMoreButton}>
          View More
        </a>
        </div>

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
      <div className={styles.foodList} ref={foodListRef}>
        {foodData.map((food, index) => (
          <FoodCard
            key={index}
            foodImage={food.foodImage}
            foodName={food.foodName}
            price={food.price}
            rating={food.rating}
            deliveryTime={food.deliveryTime}
            deliveryNote={food.deliveryNote}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FoodList;
