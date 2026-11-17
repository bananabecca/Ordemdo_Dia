import styles from './Catalogo.module.css';

type Card = { title: string; designer: string; img?: string };

const sampleCards: Card[] = [
  { title: 'Amor Doce projeto', designer: 'Diana, João Heitor e Rebecca', img: '/parabens.jpg' },
  { title: 'Pesque e pague', designer: 'Diana, João Heitor e Rebecca', img: '/avatar2.png' },
  {
    title: 'Oficina de Pixel',
    designer: 'Marcell Filomeno',
    img: '/pixelart.jpg',
  },
  { title: 'Jogo Ordem do Dia', designer: 'Equipe', img: '/ordemdodia.jpg' },
  { title: 'Projeto Lugares', designer: 'Stephany Barbosa', img: '/fruta.jpg' },
  
  {
    title: 'Avatar',
    designer: 'Stephany Barbosa',
    img: '/stephanydesenho.jpg',
  },
  { title: 'Avatar', designer: 'Stephany Barbosa', img: '/casas.jpg' },

];

export default function Catalogo(): JSX.Element {
  return (
    <section id="portfolio" className={styles.catalog}>
      <h2>Nosso Portfólio</h2>
      <div className={styles.grid}>
        {sampleCards.map((c, i) => (
          <article key={i} className={styles.card}>
            <div className={styles.media}>
              {c.img ? (
                <img src={c.img} alt={c.title} />
              ) : (
                <div className={styles.placeholder} />
              )}
            </div>
            <div className={styles.caption}>
              <p className={styles.title}>{c.title}</p>
              <p className={styles.designer}>Desiner {c.designer}</p>
            </div>
          </article>
        ))}
        <div className={styles.cardEmpty} />
        <div className={styles.cardEmpty} />
      </div>
    </section>
  );
}
