import styles from './Contato.module.css'
import Integrantes from './Integrantes'

export default function Contato(): JSX.Element {
  return (
    <section id="contato" className={styles.section}>
      {}
      <Integrantes />

      <h2>Mensagem</h2>
      <div className={styles.contactArea}>
        <div className={styles.emails}>
          <div className={styles.caixaemail}>marceli.filomeno24@nave.org.br</div>
          <div className={styles.caixaemail}>sofia.freitas24@nave.org.br</div>
          <div className={styles.caixaemail}>stephany.silva24@nave.org.br</div>
          <div className={styles.caixaemail}>diana.peres24@nave.org.br</div>
          <div className={styles.caixaemail}>joao.heitor24@nave.org.br</div>
          <div className={styles.caixaemail}>rebecca.nery24@nave.org.br</div>
        </div>

        <form className={styles.form}>
          <label>Email do usuário clicado ao lado</label>
          <input className={styles.caixa} placeholder="Assunto" />
          <textarea className={styles.caixa} placeholder="Mensagem" />
          <button type="button">Enviar</button>
        </form>
      </div>
    </section>
  )
}
