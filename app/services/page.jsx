import { Banner } from "../components/Banner"
import { Services } from "../components/Services"
import { BtnContact } from "../components/btnContact"
import styles from "../../styles/pages/Services.module.css"

export default function ServicesPage(){
  return(
    <main>
      <Banner title="Nuestros Servicios" desc="Aquí podrás ver algunas de las soluciones más comunes y en que lenguajes hemos trabajado en diferentes proyectos." />
      <Services more={false} sec=""/>
      <section className={styles.listSkills}>
        <div>
          <h1>Nuestras tecnologías</h1>
          <ul>
            <li>
              <h2>React</h2>
            </li>
            <li>
              <h2>Node.js</h2>
            </li>
            <li>
              <h2>Python</h2>
            </li>
            <li>
              <h2>MongoDB</h2>
            </li>
            <li>
              <h2>Mysql</h2>
            </li>
            <li>
              <h2>PostgreSQL</h2>
            </li>
            <li>
              <h2>HTML 5,CSS3</h2>
            </li>
            <li>
              <h2>AWS</h2>
            </li>
            <li>
              <h2>React Native</h2>
            </li>
            <li>
              <h2>GO</h2>
            </li>
          </ul>
        </div>
        <div>
          <h1>Nuestras habilidades</h1>
          <ul>
            <li>
              <h2>Asesoría {'&'} Gestión de Proyectos</h2>
            </li>
            <li>
              <h2>Desarrollo de Software</h2>
            </li>
            <li>
              <h2>Desarrollo Frontend</h2>
            </li>
            <li>
              <h2>Desarrollo Backend</h2>
            </li>
            <li>
              <h2>Desarrollo de Bases de Datos</h2>
            </li>
            <li>
              <h2>Desarrollo de APIs</h2>
            </li>
            <li>
              <h2>Aplicaciones Web</h2>
            </li>
            <li>
              <h2>Sitios Web con CMS</h2>
            </li>
            <li>
              <h2>Gestión de infraestructura de servidores</h2>
            </li>
            <li>
              <h2>Integración de los servicios en la nube</h2>
            </li>
          </ul>
        </div>
      </section>
      <BtnContact sub="Si esto es lo que buscas" link="/contact" label="Contáctanos ahora"/>
    </main>
  )
}
