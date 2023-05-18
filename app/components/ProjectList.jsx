import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/components/ProjectList.module.css"


export function ProjectList(props){
  
  const { cant, more, sec } = props;

  let data = [
    {
      title: 'Title',
      sub: 'SubTitle',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '/projects',
      label: 'Ver más'
    },
    {
      title: 'Title',
      sub: 'SubTitle',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '/projects',
      label: 'Ver más'
    },
    {
      title: 'Title',
      sub: 'SubTitle',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '/projects',
      label: 'Ver más'
    },
    {
      title: 'Title',
      sub: 'SubTitle',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      link: '/projects',
      label: 'Ver más'
    },
  ]

  const seeData = cant > 0 ? data.slice(0,cant) : data

  return (
    <section className={styles.featuredProjects}>
      {sec === true ? (<h2>Proyectos destacados</h2>) : null}
      <section className={styles.listProjects}>
        {seeData.map(({title,sub,text,link,label}) => (
          <div className={styles.itemListProjects} key={Math.random()}>
            <div className={styles.imgItemProjects}></div>
            <div className={styles.contentItemProjects}>
              <h1>{title}</h1>
              <sub>{sub}</sub>
              <p>{text}</p>
              <Link href={link}>{label}<span><FontAwesomeIcon icon={faChevronRight}/></span></Link>
            </div>
          </div>
        ))}
        
      </section>
      {more === true ? (<Link href="/projects">Ver más proyectos</Link>) : null}
    </section> 
  )
}
