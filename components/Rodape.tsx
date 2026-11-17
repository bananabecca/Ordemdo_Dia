import styles from './Rodape.module.css'

export default function Rodape(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className="footer-esquerda">2025 Being Accountable. Todos os direitos reservados.</div>
      <div className="footer-direita">Oficina Integrada 2 - NAVE Rio</div>
    </footer>
  )}