import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsersLine,faRocket,faDesktop,faDatabase,faCartShopping,faMessage } from "@fortawesome/free-solid-svg-icons"
import styles from "../../styles/components/Services.module.css"

export function Services(props){

  const {more,sec} = props;

  const data = [
    {
      number: '01',
      icon : faUsersLine,
      title: 'Comuniades Online',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '02',
      icon : faRocket,
      title: 'Páginas Web & Apps',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '03',
      icon : faDesktop,
      title: 'Interfaces y APIs',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '04',
      icon : faDatabase,
      title: 'Bases de datos',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '05',
      icon : faCartShopping,
      title: 'E-Commerce',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      number: '06',
      icon : faMessage,
      title: 'Asesorias',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]
  
  if ( sec === "home" ) {
    return (
      <section className={styles.ourServices}>
        <h2>NUESTROS SERVICIOS</h2>
        <h1>Lógica digital.</h1>
        <p>Nos especializamos en el desarrollo de soluciones de software según tu necesidad. Con muchos años de experiencia en el desarrollo y diseño de sitios web, plataformas en línea y aplicaciones web, apoyamos a su empresa en la implementación de nuevos productos de software y la mejora de sus procesos comerciales.</p>
        <h3>Algunos de nuestros productos</h3>
        <div className={styles.gridServices}>
          {data.map(({number,icon,title}) => (
            <div className={styles.itemGridServices} key={number}><span><FontAwesomeIcon icon={icon}/></span><h4>{title}</h4></div>
          ))}
        </div>
        { more === true ? (<Link href="/services">Ver todos los servicios</Link>) : null}
      </section>
    )
  } else {
    return(
      <div className={styles.gridServices}>
        {data.map(({number,title,text}) => (
          <div className={styles.itemGridPage} key={number}>
            <span>{number}</span>
            <div className={styles.contentItemPage}>
              <h4>{title}</h4>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
