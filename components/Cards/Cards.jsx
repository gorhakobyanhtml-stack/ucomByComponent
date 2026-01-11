import Card from '../Card/Card'
import styles from './Cards.module.css'

export default function Cards() {
  const cards = [
    'https://cdn.wowdeals.me/uploads/catalogues/issues/80/195804/1800x1800/600380641_1263245832501870_4854056920044511203_n.jpg',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQw_C7utY97bdPHVMR29j7GFz4zoW_tztl_7smkKeFVrVCLIgtz',
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKxbLFyqMbfLXpHEzPJuLqqQ3afHsXoMWFvXRzrqMxiBJzwtW4',
    'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrOoZf5VP8Nm4ePZ5KVgkFAjVI5Oj0uQGD93KTJMYbnA3JOUWZ'
  ]

  return (
    <section className={styles.grid}>
      {cards.map((img, i) => (
        <Card key={i} image={img} title={`Card ${i + 1}`} />
      ))}
    </section>
  )
}
