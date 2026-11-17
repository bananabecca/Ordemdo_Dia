import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Catalogo from '../components/Catalogo'
import Contato from '../components/Contato'
import Rodape from '../components/Rodape'

export default function Page() {
  return (
    <>
      <Nav />
      <main style={{marginTop: "90px"}}>
        <Hero />
        <Catalogo />
        <Contato />
        <Rodape />
      </main>
    </>
  )
}