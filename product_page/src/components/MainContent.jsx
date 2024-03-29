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
import dflogo from '../assets/dflogo.png';
import star from '../assets/Star 1.png';

const MainContent = () => {
  return (
    <div className={styles.mainContent}>
      <div className={styles.categoryIcons}>
      <div className={`${styles.categoryIcon1} ${styles.categoryIcon}`}>
          <img src={foodIcon} alt="Food" />
          <h3>Food</h3>
        </div>
        <div className={`${styles.categoryIcon3} ${styles.categoryIcon}`}>
          <img src={clothesIcon} alt="Clothes" />
          <h3>Clothes</h3>
        </div>
        <div className={`${styles.categoryIcon} ${styles.categoryIcon4}`}>
          <img src={booksIcon} alt="Books" />
          <h3>Books</h3>
        </div>
        <div className={`${styles.categoryIcon} ${styles.categoryIcon2}`}>
          <img src={footwearIcon} alt="Footwear" />
          <h3>Footwear</h3>
        </div>
        <div className={`${styles.categoryIcon} ${styles.categoryIcon3}`}>
          <img src={skincareIcon} alt="Skincare" />
          <h3>Skincare</h3>
        </div>
        <div className={`${styles.categoryIcon1} ${styles.categoryIcon}`}>
          <img src={haircareIcon} alt="Haircare" />
          <h3>Haircare</h3>
        </div>
        <div className={`${styles.categoryIcon} ${styles.categoryIcon4}`}>
          <img src={gadgetsIcon} alt="Gadgets" />
          <h3>Gadgets</h3>
        </div>
        <div className={`${styles.categoryIcon} ${styles.categoryIcon2}`}>
          <img src={stationeriesIcon} alt="Stationeries" />
          <h3>Stationeries</h3>
        </div>
      </div>

      {/* VENDORS */}
      <div className={styles.vendors}>
        <h2> Shop from a Vendor near you 🛒 </h2>
        <div className={styles.vendor}>
          <div className={styles.vendorheader}>
            <p><b> Dummy Foods </b> </p>
            <p> Food For All </p>
            <img src={dflogo} alt="dflogo" className={styles.dflogo} />
          </div>
          <h4 className={styles.contenthead}> Dummy Foods</h4>
          <ul className={styles.product}>
            <li>&#x1F375; Rice </li>
            <li>&#x1F375;  Stirfry </li>
            <li>&#x1F375; Pizza Slice </li>
          </ul>
          <p> <b> Price Range:</b> &#8358;500 - &#8358;6,000 </p>
          <div className={styles.rating}>
            <img src={star} alt='star' className={styles.star}/> <p><b>5.0</b>(20)</p>
          </div>
          <p>🗺️ UI, Awo Hall </p>
          <p><small> Delivery Charges Apply </small></p>
        </div>
      </div>
    
      {/* <div className={styles.vendorSignUp}>
        <button className={styles.vendorButton}>Get started as a Vendor</button>
      </div> */}
    </div>
  );
};

 

export default MainContent
// export default getCategory