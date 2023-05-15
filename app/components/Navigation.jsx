import styles from "../../styles/components/Navigation.module.css"
import Link from "next/link"

export function Navigation(){
  return(
    <header className={styles.headerNav}>
      <nav className={styles.nav}>
        <div className={styles.navIcon}>
          <Link className={styles.icon} href="/"></Link>
        </div>
        <ul>
          <li>
            <Link href="/projects">Proyectos</Link>
          </li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/about">Acerca de</Link></li>
          <li><Link href="/contact">Contáctanos</Link></li>
        </ul>
      </nav>
    </header>
  )
}
