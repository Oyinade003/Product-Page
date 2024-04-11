import React, { useState } from 'react';
import styles from '../styles/Category.module.css';
import ProductCard from './ProductCard';
import productData from './data';


interface CategoryPageProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ searchTerm, setSearchTerm }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [deliveryTimeRange, setDeliveryTimeRange] = useState<[number, number]>([0, Infinity]);
  const [minRating, setMinRating] = useState<number>(0);
  const [isFiltersReset, setIsFiltersReset] = useState(false);


  const [showFilters, setShowFilters] = useState(false);
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedSubcategory('All');
    setSelectedLocation('All');
    setPriceRange([0, Infinity]);
    setDeliveryTimeRange([0, Infinity]);
    setMinRating(0);
    setIsFiltersReset((prevState) => !prevState);
  };


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
            <span>Subcategory:</span>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              style={{backgroundColor: "#f0f0f0", color: "#590209" }}
            >
              <option value="All">All</option>
              {[
                ...new Set(
                  Object.values(productData).flatMap((subcategoryProducts) =>
                    subcategoryProducts.map((product) => product.subcategory)
                  )
                ),
              ].map((subcategory) => (
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
              style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
            >
              <option value="All">All</option>
              {[
                ...new Set(
                  Object.values(productData)
                    .flatMap((subcategoryProducts) =>
                      subcategoryProducts.filter(
                        (product) =>
                          selectedSubcategory === 'All' || product.subcategory === selectedSubcategory
                      ).map((product) => product.location)
                    )
                    .filter((location) => location !== undefined)
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
                  style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
                  className={styles.numberInput}
                />
                -
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
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
                  style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
                />
                -
                <input
                  type="number"
                  value={deliveryTimeRange[1]}
                  onChange={(e) =>
                    setDeliveryTimeRange([deliveryTimeRange[0], parseInt(e.target.value)])
                  }
                  style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
                />
                minutes
              </div>
              <div>
                <span>Minimum Rating:</span>
                <input
                  type="number"
                  step={0.1}
                  value={minRating}
                  onChange={(e) => setMinRating(parseFloat(e.target.value))}
                  style={{ backgroundColor: "#f0f0f0", color: "#590209" }}
                />
              </div>
              <button className={styles.resetButton} onClick={handleResetFilters}>
                Reset All Filters
              </button>
            </div>
          </div>
        )}
      </div>


      <div className={styles.productGrid}>
        {Object.keys(productData).filter(
          (subcategory) =>
            (selectedSubcategory === 'All' ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) => product.subcategory === selectedSubcategory
              )) &&
            (selectedLocation === 'All' ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) => product.location === selectedLocation
              )) &&
            (searchTerm === '' ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
              )) &&
            (priceRange[0] === 0 && priceRange[1] === Infinity ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) =>
                  product.price >= priceRange[0] && product.price <= priceRange[1]
              )) &&
            (deliveryTimeRange[0] === 0 && deliveryTimeRange[1] === Infinity ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) =>
                  product.deliveryTime >= deliveryTimeRange[0] && product.deliveryTime <= deliveryTimeRange[1]
              )) &&
            (minRating === 0 ||
              Object.values(productData)[Object.keys(productData).indexOf(subcategory)].some(
                (product) => product.rating >= minRating
              ))
        ).map((subcategory) => {
          const subcategoryProducts = Object.values(productData)[Object.keys(productData).indexOf(subcategory)].filter(
            (product) =>
              (isFiltersReset ||
              product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
              product.price >= priceRange[0] &&
              product.price <= priceRange[1] &&
              product.deliveryTime >= deliveryTimeRange[0] &&
              product.deliveryTime <= deliveryTimeRange[1] &&
              product.rating >= minRating &&
              (selectedLocation === 'All' || product.location === selectedLocation) &&
              (selectedSubcategory === 'All' || product.subcategory === selectedSubcategory)
)
          );

          if (subcategoryProducts.length > 0) {
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
          }
          return null;
        })}
      </div>


    </div>
  );
};

export default CategoryPage;