const FoodList = () => {
  const foodListRef = useRef(null);
  const handleScroll = (direction) => {
    const containerWidth = foodListRef.current.offsetWidth;
    const scrollAmount = direction === "left" ? -containerWidth : containerWidth;
    foodListRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className={styles.foodListContainer}>
      <h2>Foods and Snacks</h2>
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
        <a href="https://product-page-u6mz.vercel.app/" className={styles.viewMoreButton}>
          View More
        </a>
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
  );
};
