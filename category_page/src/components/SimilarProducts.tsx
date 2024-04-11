import React from 'react';
import styles from '../styles/Category.module.css';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  deliveryTime: number;
  deliveryCharges: boolean;
  rating: number;
  location: string;
  imageUrl: string;
  subcategory: string;
}

interface SimilarProductsProps {
  currentProduct: Product;
  allProducts: Product[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ currentProduct, allProducts }) => {
  const similarProducts = allProducts.filter(
    (product) => product.id !== currentProduct.id && product.subcategory === currentProduct.subcategory
  );

  return (
    <div className={styles.similarProducts}>
      <div className={styles.productGrid}>
      <div className={styles.productRowContainer}>
      <h3>Similar Products</h3>
      <div className={styles.productRow}>
        {similarProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
};

export default SimilarProducts;