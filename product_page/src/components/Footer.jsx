// src/components/Footer.jsx
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h4>Uniclique</h4>
          <ul>
            <li>About Us</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Account</h4>
          <ul>
            <li>Seller Login</li>
            <li>Sign Up</li>
            <li>My Orders</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Social</h4>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; 2024, All Rights Reserved Uniclique
      </div>
    </footer>
  )
}

export default Footer