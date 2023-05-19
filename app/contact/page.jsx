import { Banner } from "../components/Banner"
import styles from "../../styles/pages/Contact.module.css"

export default function ContactPage(){
  return(
    <main>
      <Banner title="Vamos." desc="Siempre estamos buscando nuevas ideas y proyectos emocionantes." />
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
