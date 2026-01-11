import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="https://www.ucom.am/images/main_logo.svg" className={styles.logo} />
      <nav className={styles.nav}>
        <a>Տնային ինտերնետ</a>
        <a>Բջջային կապ</a>
        <a>Ռոումինգ</a>
        <a>5G ցանց</a>
      </nav>
      <button className={styles.btn}>Մուտք</button>
    </header>
  )
}
