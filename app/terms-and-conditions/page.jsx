import { Banner } from "../components/Banner"
import Link from "next/link"
import styles from "../../styles/pages/terms.module.css"

export default function termsAndCoditionsPage(){
  return(
    <main>
      <Banner title="Terminos y condiciones" desc=""/>
      <Link href="/" className={styles.link}>Terminos y condiciones <span>(Dvloped)</span></Link>
    </main>
  )
}
