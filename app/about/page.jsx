import { Banner } from "../components/Banner"
import styles from "../../styles/pages/About.module.css"
import { TextOffset } from "../components/TextOffset"

export default function AboutPage(){
  
  let content = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,sed diam voluptua.
    At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`

  return(
    <main>
      <Banner title="Sobre Nosotros" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <div className={styles.imgAbout}></div>
      <TextOffset content={content} br={true} upper={false} line={true}/>
      <TextOffset content={content} br={true} upper={true} line={true}/>
    </main>
  )
}
