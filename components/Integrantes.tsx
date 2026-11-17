import styles from './Integrantes.module.css';
import Image from 'next/image';

export default function Integrantes() {
  const integrantes = [
    { nome: 'CELI', img: '/marceli.jpg', classe: 'celi' },
    { nome: 'RECEBA', img: '/rebecca.jpg', classe: 'receba' },
    { nome: 'DINA', img: '/a.jpg', classe: 'dina' },
    { nome: 'SOSO', img: '/sofia.jpg', classe: 'soso' },
    { nome: 'JOCA', img: '/heitor.jpg', classe: 'joca' },
    { nome: 'TETÉ', img: '/ste.jpg', classe: 'tete' },
  ];

  return (
    <section id="integrantes" className={styles.integrantes}>
      <h2>Integrantes</h2>
      <div className={styles.grid}>
        {integrantes.map((pessoa) => (
          <div key={pessoa.nome} className={styles.card}>
            <div className={styles.imagem}>
              <Image
                src={pessoa.img}
                alt={pessoa.nome}
                width={200}
                height={200}
                className={styles.foto}
              />
            </div>
            <div className={styles.nomeVertical}>
              <span>{pessoa.nome}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
