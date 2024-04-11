import React from 'react';
import styles from '../styles/ProductCard.module.css';

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    deliveryTime: number;
    deliveryCharges: boolean;
    rating: number;
    location: string;
    imageUrl: string;
    subcategory: string;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const { name, price, deliveryTime, deliveryCharges, rating, imageUrl } = product;
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.price}>₦{price}</p>
      <p>{deliveryTime} minutes</p>
      <p>{deliveryCharges ? 'Delivery Charges Apply' : 'Free Delivery'}</p>
      <p>Rating: {rating}</p>
      {/* Add other product details or actions here */}
    </div>
  );
};

export default ProductCard;