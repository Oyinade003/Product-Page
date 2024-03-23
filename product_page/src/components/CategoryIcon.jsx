// src/components/CategoryIcon.jsx
import styles from '../styles/CategoryIcon.module.css'

const CategoryIcon = ({ category, icon }) => {
  return (
    <div className={styles.categoryIcon}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={category} />
      </div>
      <h4>{category}</h4>
    </div>
  )
}

export default CategoryIcon