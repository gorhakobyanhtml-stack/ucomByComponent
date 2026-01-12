import styles from "./Info.module.css";

export default function Info() {
  return (
    <section className={styles.info}>
      <h3>Բաժանորդագրության կարևոր պայմաններ</h3>
      <ul>
        <li>Ծառայությունը հասանելի է ամբողջ ՀՀ-ում</li>
        <li>Սարքավորումը տրամադրվում է անվճար</li>
      </ul>
      <button className={styles.btn}>Սկսել</button>
    </section>
  );
}
