import React, { useRef } from 'react';
import styles from '../styles/VendorCard.module.css';
import dflogo from '../assets/dflogo.png';
import shlogo from '../assets/footwear.png'
import star from '../assets/Star 1.png';
import emptyStar from '../assets/emptyStar.png';

const vendorData = [
  {
    vendorName: 'Dummy Foods',
    vendorDescription: 'Food For All',
    vendorLogo: dflogo,
    products: ['Rice', 'Stirfry', 'Pizza Slice'],
    priceRange: '₦500 - ₦6,000',
    rating: 4.2,
    location: 'UI, Awo Hall',
    deliveryNote: 'Delivery Charges Apply',
  },
  {
    vendorName: 'Tasty Bites',
    vendorDescription: 'Delicious Meals',
    vendorLogo: shlogo,
    products: ['Burger', 'Sandwich', 'Fries'],
    priceRange: '₦800 - ₦2,000',
    rating: 3.4,
    location: 'Zik Hall, UI',
    deliveryNote: 'Free Delivery',
  },
  {
    vendorName: 'Fola Hairs',
    vendorDescription: 'Slick Hairstyles',
    vendorLogo: shlogo,
    products: ['Braids', 'Crochet', 'Corn rows'],
    priceRange: '₦500 - ₦10,000',
    rating: 2.3,
    location: 'Agbowo, UI',
    deliveryNote: 'Mobile Services Available',
  },
  {
    vendorName: 'Blings Fashion',
    vendorDescription: 'Fashion styles',
    vendorLogo: dflogo,
    products: ['Shirts', 'Dresses', 'Shorts'],
    priceRange: '₦5,000 - ₦25,000',
    rating: 5.0,
    location: 'Ajibode, UI',
    deliveryNote: 'Free Delivery Available',
  },
  // Add more vendor data objects here
];

const VendorCard = ({
  vendorName,
  vendorDescription,
  vendorLogo,
  products,
  priceRange,
  rating,
  location,
  deliveryNote,
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} src={star} alt="star" className={styles.star} />);
    }
    if (hasHalfStar) {
      stars.push(<img key="half" src={star} alt="half-star" className={`${styles.star} ${styles.halfStar}`} />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src={emptyStar} alt="empty-star" className={styles.star} />);
    }
    return stars;
  };

  return (
      <div className={styles.vendor}>
        <div className={styles.vendorheader}>
          <p className={styles.vendorName}><b>{vendorName}</b></p>
          <p>{vendorDescription}</p>
          <img src={vendorLogo} alt={`${vendorName} logo`} className={styles.dflogo} />
        </div>
        <div className={styles.contenthead}>
        <h4 className={styles.contentName}>{vendorName}</h4>
        <ul className={styles.product}>
          {products.map((product, index) => (
            <li key={index}>&#x1F375; {product}</li>
          ))}
        </ul>
        <p className={styles.priceRange}><b>Price Range:</b> {priceRange}</p>
        <p><small>{deliveryNote}</small></p>
        <div className={styles.location}>
          <p>🗺️ {location}</p>
          <div className={styles.rating}> {renderStars(rating)} </div>
        </div>
        </div>
      </div>
  );
};

const VendorList = () => {
    const vendorListRef = useRef(null);
  
    const handleScroll = (direction) => {
      const containerWidth = vendorListRef.current.offsetWidth;
      const scrollAmount = direction === 'left' ? -containerWidth : containerWidth;
      vendorListRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
  
    return (
      <div className={styles.vendorListContainer}>
        <div className={styles.scrollContainer}>
        <button
          className={`${styles.scrollButton} ${styles.leftButton}`}
          onClick={() => handleScroll('left')}
          aria-label="Scroll Left"
        >
          &lt;
        </button>
        <button
          className={`${styles.scrollButton} ${styles.rightButton}`}
          onClick={() => handleScroll('right')}
          aria-label="Scroll Right"
        >
          &gt;
        </button>
        </div>
        <div className={styles.vendorList} ref={vendorListRef}>
          {vendorData.map((vendor, index) => (
            <VendorCard
              key={index}
              vendorName={vendor.vendorName}
              vendorDescription={vendor.vendorDescription}
              vendorLogo={vendor.vendorLogo}
              products={vendor.products}
              priceRange={vendor.priceRange}
              rating={vendor.rating}
              location={vendor.location}
              deliveryNote={vendor.deliveryNote}
            />
          ))}
        </div>
      </div>
    );
  };

export default VendorList;