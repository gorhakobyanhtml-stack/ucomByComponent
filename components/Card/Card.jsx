import styles from './Card.module.css'

export default function Card({ image, title }) {
  return (
    <div className={styles.card}>
      <img src={image} />
      <h3>{title}</h3>
    </div>
  )
}
