import styles from '../styles/Header.module.css'

import logo from '/assets/logo1.png';
import cart from '/assets/Vector.png';
import user from '/assets/Group.png';
// import headerimg from '../assets/header.png';
import searchIcon from '/assets/searchicon.png';

const Header = () => {
  return (
    <header className={styles.header}>
    <div className={styles.headerbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Uniclique" />
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" className={styles.searchInput} />
        <img src={searchIcon} className={styles.searchIcon} />
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
            <h2 className={styles.headerText}>GET YOUR FOOD PRODUCTS ON UNICLIQUE</h2>
        </div>
        {/* <img src={headerimg} alt="Header" className={styles.headerImage} /> */}
      </div>
    </header>
  )
}

export default Header;