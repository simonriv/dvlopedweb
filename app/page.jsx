import styles from "../styles/pages/Home.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleRight,faUsersLine,faRocket,faDesktop,faDatabase,faCartShopping,faMessage } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

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
      <section className={styles.featuredProjects}>
        <h2>Proyectos destacados</h2>
      </section>
      <section className={styles.testimonials}>
        <h1>Lo que dicen nuestros clientes</h1>
        <sub>TESTIMONIOS</sub>
      </section>
      <section className={styles.ourServices}>
        <h2>NUESTROS SERVICIOS</h2>
        <h1>Lógica digital.</h1>
        <p>Nos especializamos en el desarrollo de soluciones de software según tu necesidad. Con muchos años de experiencia en el desarrollo y diseño de sitios web, plataformas en línea y aplicaciones web, apoyamos a su empresa en la implementación de nuevos productos de software y la mejora de sus procesos comerciales.</p>
        <h3>Algunos de nuestros productos</h3>
        <div className={styles.gridServices}>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faUsersLine}/></span><h4>Comunidades Online</h4></div>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faRocket}/></span><h4>Páginas Web {'&'} Apps</h4></div>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faDesktop}/></span><h4>Interfaces y APIs</h4></div>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faDatabase}/></span><h4>Bases de datos</h4></div>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faCartShopping}/></span><h4>E-Commerce</h4></div>
          <div className={styles.itemGridServices}><span><FontAwesomeIcon icon={faMessage}/></span><h4>Asesorias</h4></div>
        </div>
        <Link href="/services">Ver todos los servicios</Link>
      </section>
      <section className={styles.ourTeam}>
        <h2>NUESTRO EQUIPO</h2>
        <h1>Un equipo ganador de desarrolladores y diseñadores expertos.</h1>
        <p>Buscamos la calidad, la innovación, la confiabilidad y un enfoque orientado a tu necesidad.</p>
        <Link href="/about">Más acerca de nosotros</Link>
      </section>
    </main>
  )
}
