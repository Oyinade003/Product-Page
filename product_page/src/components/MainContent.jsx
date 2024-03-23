// src/components/MainContent.jsx
import styles from '../styles/MainContent.module.css'

// Import individual images
import foodIcon from '../assets/food.png';
import clothesIcon from '../assets/products-clothes.png';
import booksIcon from '../assets/books.png';
import footwearIcon from '../assets/footwear.png';
import skincareIcon from '../assets/skincare.jpg';
import haircareIcon from '../assets/haircare.png';
import gadgetsIcon from '../assets/gadgets.png';
import stationeriesIcon from '../assets/stationeries.png';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.categoryIcons}>
        <div className={styles.categoryIcon}>
        <h3>Food</h3>
          <img src={foodIcon} alt="Food" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Clothes</h3>
          <img src={clothesIcon} alt="Clothes" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Books</h3>
          <img src={booksIcon} alt="Books" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Footwear</h3>
          <img src={footwearIcon} alt="Footwear" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Skincare</h3>
          <img src={skincareIcon} alt="Skincare" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Haircare</h3>
          <img src={haircareIcon} alt="Haircare" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Gadgets</h3>
          <img src={gadgetsIcon} alt="Gadgets" />
        </div>
        <div className={styles.categoryIcon}>
        <h3>Stationeries</h3> 
          <img src={stationeriesIcon} alt="Stationeries" />
        </div>
      </div>
    
      <div className={styles.vendor}>
        <button className={styles.vendorButton}>Get started as a Vendor</button>
      </div>
    </div>
  );
};

 

export default MainContent
// export default getCategory