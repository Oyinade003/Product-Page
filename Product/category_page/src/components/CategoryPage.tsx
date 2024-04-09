import React, { useState } from 'react';
import styles from '../styles/Category.module.css';
import ProductCard from './ProductCard';
import productData from './data';



const CategoryPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
    const [selectedLocation, setSelectedLocation] = useState<string>('All');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
    const [deliveryTimeRange, setDeliveryTimeRange] = useState<[number, number]>([0, Infinity]);
    const [minRating, setMinRating] = useState<number>(0);


    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => {
        setShowFilters(!showFilters);
      };

    // const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, subcategory: string) => {
    //   e.preventDefault();
    //   const sectionId = subcategory.replace(/\s+/g, '-').toLowerCase();
    //   const element = document.getElementById(sectionId) as HTMLElement | null;
    //   if (element) {
    //     element.scrollIntoView({ behavior: 'smooth' });
    //   }
    // };

    if (!productData || typeof productData !== 'object') {
        return <div>Loading...</div>;
    }

    return (
        <div className="category-page">

<div className={styles.filtersContainer}>
  <div className={styles.filtersHeader} onClick={toggleFilters}>
    <span className={styles.filtersIcon}>&#9776;</span>
    <span>Filters</span>
  </div>
  {showFilters && (
    <div className={styles.filtersBody}>
      <div className={styles.searchfield}>
        <div>
          <span>Search:</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <span>Subcategory:</span>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            style={{ width: "200px", backgroundColor: "#f0f0f0", color: "#590209" }}
          >
            <option value="All">All</option>
            {Object.keys(productData).map((subcategory) => (
              <option key={subcategory} value={subcategory}>
                {subcategory}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Location:</span>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            style={{ width: "200px", backgroundColor: "#f0f0f0", color: "#590209" }}
          >
            <option value="All">All</option>
            {[
              ...new Set(
                Object.values(productData).flatMap((subcategoryProducts) =>
                  subcategoryProducts.map((product) => product.location)
                )
              ),
            ].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div>
          <span>Price Range:</span>
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value), priceRange[1]])
            }
            style={{ width: "100px", backgroundColor: "#f0f0f0", color: "#590209" }}
          />
          -
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            style={{ width: "100px", backgroundColor: "#f0f0f0", color: "#590209" }}
          />
        </div>
        <div>
          <span>Delivery Time:</span>
          <input
            type="number"
            value={deliveryTimeRange[0]}
            onChange={(e) =>
              setDeliveryTimeRange([parseInt(e.target.value), deliveryTimeRange[1]])
            }
            style={{ width: "100px", backgroundColor: "#f0f0f0", color: "#590209" }}
          />
          -
          <input
            type="number"
            value={deliveryTimeRange[1]}
            onChange={(e) =>
              setDeliveryTimeRange([deliveryTimeRange[0], parseInt(e.target.value)])
            }
            style={{ width: "100px", backgroundColor: "#f0f0f0", color: "#590209" }}
          />
        </div>
        <div>
          <span>Minimum Rating:</span>
          <input
            type="number"
            value={minRating}
            onChange={(e) => setMinRating(parseInt(e.target.value))}
            style={{ width: "100px", backgroundColor: "#f0f0f0", color: "#590209" }}
          />
        </div>
      </div>
    </div>
  )}
</div>


            <div className={styles.productGrid}>
                {Object.keys(productData).map((subcategory) => {
                    const subcategoryProducts = Object.values(productData)[Object.keys(productData).indexOf(subcategory)].filter(
                        (product) =>
                            product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                            product.price >= priceRange[0] &&
                            product.price <= priceRange[1] &&
                            product.deliveryTime >= deliveryTimeRange[0] &&
                            product.deliveryTime <= deliveryTimeRange[1] &&
                            product.rating >= minRating &&
                            (selectedLocation === 'All' || product.location === selectedLocation) &&
                            (selectedSubcategory === 'All' || product.subcategory === selectedSubcategory)
                    );

                    return (
                        <div
                            key={subcategory}
                            className={styles.subcategorySection}
                            id={subcategory.replace(/\s+/g, '-').toLowerCase()}
                        >
                            <h2 className={styles.subcategoryName}>{subcategory}</h2>
                            <div className={styles.productRowContainer}>
                                <div className={styles.productRow}>
                                    {subcategoryProducts.map((product) => (
                                        <div key={product.id} className={styles.productCard}>
                                            <ProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryPage;