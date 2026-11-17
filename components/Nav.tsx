import styles from './Nav.module.css'

export default function Nav(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src="/logo.png" alt="logo" className={styles.logo} />
        <img src="/nomedaempresa.png" alt="logo" className={styles.titulo}/>
      </div>

      <nav className={styles.nav}>
        <a href="#inicio">Inicio</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#integrantes">Integrantes</a>
        <a href="#contato">Contatos</a>
      </nav>
    </header>
  )
}