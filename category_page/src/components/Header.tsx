import React from 'react';
import styles from '../styles/Header.module.css';
import logo from '/logo1.png';
import cart from '/assets/cart.png';
import user from '/assets/user.png';
import searchIcon from '/assets/searchicon.png';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerbar}>
          <img className={styles.logo} src={logo} alt="Uniclique" />
        <div className={styles.searchContainer}>
          <span>Search:</span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <img className={styles.searchIcon}  src={searchIcon} alt="searchIcon" />
        </div>
        <div className={styles.icons}>
          <button className={styles.cartIcon}>
            <img src={cart} alt="Cart" />
          </button>
          <button className={styles.userIcon}>
            <img src={user} alt="User" />
          </button>
        </div>
      </div>
      <div className={styles.headericon}>
        <div className={styles.headerTextWrapper}>
          <h2 className={styles.headerText}> FOOD PRODUCTS ON UNICLIQUE</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;