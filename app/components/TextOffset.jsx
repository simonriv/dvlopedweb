import styles from "../../styles/components/TextOffset.module.css"

export function TextOffset(props){
  const { content,br,upper,line } = props;
  
  return (
    <p className={upper === true ? `${styles.cont} ${styles.upp}` : styles.cont}>
      {content}
      {line === true ? <br/> : null}
      { br === true ? <br/> : null}
    </p>
  )
}
