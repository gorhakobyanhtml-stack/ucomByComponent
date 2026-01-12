import styles from "./Steps.module.css";

export default function Steps() {
  return (
    <section className={styles.steps}>
      <h2 className={styles.title}>Դարձեք Ucom-ի բաժանորդ ընդամենը 3 քայլով</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <span className={styles.num}>1</span>
          <p>Լրացրեք դիմումի հայտը</p>
        </div>
        <div className={styles.card}>
          <span className={styles.num}>2</span>
          <p>Սպասեք մեր մասնագետի զանգին</p>
        </div>
        <div className={styles.card}>
          <span className={styles.num}>3</span>
          <p>Ստացեք սարքը և վայելեք ծառայությունը</p>
        </div>
      </div>
    </section>
  );
}
