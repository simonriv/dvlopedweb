import styles from "../../styles/components/Banner.module.css"

export function Banner(props){
  const { title,desc } = props;
  
  if (desc === "") {
    return(
      <section className={styles.banner}>
        <h1 className={styles.title}>{title}</h1>
      </section>
    )
  } else {
    return(
      <section className={styles.banner}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </section>
    )
  }

  
}
