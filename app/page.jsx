import styles from "../styles/pages/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { ProjectList } from "./components/ProjectList"
import { Services } from "./components/Services"

export default function HomePage(){
  return (
    <main>
      <section className={styles.bannerHome}>
        <h3>DESARROLLO DE SOFTWARE - COLOMBIA</h3>
        <h1>Materializando ideas.</h1>
        <p>Dvloped es una agencia especializada en la realización de proyectos de software para empresas líderes.</p>
      </section>
      <section className={styles.secKnow}>
        <h2>Para conocernos</h2>
        <ul>
          <li>
            <Link href="#pBest"><span><FontAwesomeIcon icon={faChevronCircleRight}/></span>Lo que hacemos mejor</Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <Link href=""><span><FontAwesomeIcon icon={faChevronCircleRight}/></span>Quiénes son nuestro clientes</Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </li>
          <li>
            <Link href=""><span><FontAwesomeIcon icon={faChevronCircleRight}/></span>Cómo trabajamos</Link>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </li>
        </ul>
      </section>

      <ProjectList cant={2} sec={true} more={true}/>
      
      <section className={styles.testimonials}>
        <h1>Lo que dicen nuestros clientes</h1>
        <sub>TESTIMONIOS</sub>
        <div className={styles.gridTestimonials}>
          <div className={styles.itemGridTestimonials}>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className={styles.personTestimonials}>
              <div className={styles.photoPerson}></div>
              <div className={styles.dataPerson}>
                <Link href="/">Name person</Link>
                <h4>Company person</h4>
              </div>
            </div>
          </div>
          <div className={styles.itemGridTestimonials}>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <div className={styles.personTestimonials}>
              <div className={styles.photoPerson}></div>
              <div className={styles.dataPerson}>
                <Link href="/">Name person</Link>
                <h4>Company person</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services more={true} sec="home"/>
      
      <section className={styles.ourTeam}>
        <h2>NUESTRO EQUIPO</h2>
        <h1>Un equipo ganador de desarrolladores y diseñadores expertos.</h1>
        <p>Buscamos la calidad, la innovación, la confiabilidad y un enfoque orientado a tu necesidad.</p>
        <Link href="/about">Más acerca de nosotros</Link>
      </section>
    </main>
  )
}
