import styles from "../../styles/components/Footer.module.css"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook,faInstagram,faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footerIcon}>
        <div className={styles.icon}></div>
      </div>
      <div className={styles.footerMiddle}>
        <ul>
          <li><Link href="">Politicas de privacidad</Link></li>
          <li><Link href="">Terminos y condiciones</Link></li>
          <li><Link href="">Legal</Link></li>
        </ul>
        <p>© 2023 Dvloped. Todos los derechos reservados.</p>
      </div>
      <div className={styles.footerSocial}>
        <Link href=""><FontAwesomeIcon icon={faFacebook}/></Link>
        <Link href=""><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link href=""><FontAwesomeIcon icon={faWhatsapp}/></Link>
      </div>
    </footer>
  )
}
