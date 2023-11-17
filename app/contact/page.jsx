import { Banner } from "../components/Banner"
import styles from "../../styles/pages/Contact.module.css"

export default function ContactPage(){
  return(
    <main>
      <Banner title="Contáctanos" desc="Déjanos tu información y pronto estaremos en contacto contigo." />
      <form className={styles.form}>
        <input type="text" placeholder="Nombres*" required/>
        <input type="text" placeholder="Apellidos*" required/>
        <input type="text" placeholder="Compañia / Empresa*" required/>
        <input type="text" placeholder="Email*" required/>
        <input type="text" placeholder="Teléfono (Opcional)" />
        <textarea placeholder="Mensaje / Requerimiento*"/>
        <button type="submit">Enviar</button>
      </form>

    </main>
  )
}
