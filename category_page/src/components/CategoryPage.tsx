// import { useState } from 'react';
import styles from '../styles/Category.module.css';;
import ProductCard from './ProductCard';
import productData from './data.ts';
// import { Product } from './types';


const CategoryPage = () => {

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Foods and Snacks</h1>
        <p>Satisfy your cravings with our delicious selection of foods and snacks. From savory meals to sweet treats, we offer a wide variety of options to tantalize your taste buds.</p>
        <div className={styles.subcategoryNav}>
          <div className={`${styles.subcategoryLink} ${styles.subcategoryLinkActive}`}>
            <a href="#">All</a>
          </div>
          <div className={styles.subcategoryLink}>
            <a href="#">Nigerian Dishes</a>
          </div>
          <div className={styles.subcategoryLink}>
            <a href="#">Fast Food</a>
          </div>
          <div className={styles.subcategoryLink}>
            <a href="#">Snacks</a>
          </div>
          <div className={styles.subcategoryLink}>
            <a href="#">Drinks</a>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {Object.keys(productData).map((subcategory) => (
          <div key={subcategory} className="subcategory-section">
            <h2>{subcategory}</h2>
            <div className="product-row">
              {productData[subcategory].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ... */}
    </div>
  );
};

export default CategoryPage;

// const [products, setProducts] = useState<Product[]>(productData);
// const [products, setProducts] = useState<Product[]>([]);

// useEffect(() => {
//   ..Fetch the product data from an API or other source...
//   fetchProductData()
//     .then((data) => setProducts(data))
//     .catch((error) => console.error('Error fetching product data:', error));
// }, []);

// const fetchProductData = async () => {
//   try {
//     ..Make an API call or fetch data from a source..
//     const response = await fetch('/api/products');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Error fetching product data');
//   }
// };