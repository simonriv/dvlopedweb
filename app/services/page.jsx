import { Banner } from "../components/Banner"
import { Services } from "../components/Services"
import { BtnContact } from "../components/btnContact"
import styles from "../../styles/pages/Services.module.css"

export default function ServicesPage(){
  return(
    <main>
      <Banner title="Nuestros Servicios" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
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
              <h2>Java</h2>
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
              <h2>Project Management {'&'} Consulting</h2>
            </li>
            <li>
              <h2>Software Development</h2>
            </li>
            <li>
              <h2>Frontend Development</h2>
            </li>
            <li>
              <h2>Backend Development</h2>
            </li>
            <li>
              <h2>Database Development</h2>
            </li>
            <li>
              <h2>API Development</h2>
            </li>
            <li>
              <h2>Web Applications</h2>
            </li>
            <li>
              <h2>CMS Websites</h2>
            </li>
            <li>
              <h2>Server Infrastructure Management</h2>
            </li>
            <li>
              <h2>Cloud Service Integration</h2>
            </li>
          </ul>
        </div>
      </section>
      <BtnContact sub="Si esto es lo que buscas" link="/contact" label="Contáctanos ahora"/>
    </main>
  )
}
