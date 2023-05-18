import Link from "next/link"
import styles from "../../styles/components/btnContact.module.css"

export function BtnContact(props){
  const {sub,link,label} = props;
  return(
    <section className={styles.btnContact}>
      <h2>{sub}</h2>
      <Link href={link}>{label}</Link>
    </section>
  )
}
