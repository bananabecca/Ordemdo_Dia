import styles from './Hero.module.css'

export default function Hero(): JSX.Element {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.esquerda}>
        <h1>Jogue e<br/>Garanta<br/>seu Futuro</h1>
      </div>
      <div className={styles.direita}>
        <img src="/logoordemdodia.png" alt="ordem do dia" className={styles.logo} />
      </div>
    </section>
  )
}