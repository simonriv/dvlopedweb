import { Banner } from "../components/Banner"
import { TextOffset } from "../components/TextOffset"

export default function legalPage(){
  return(
    <main>
      <Banner title="Información Legal" desc=""/>
      <TextOffset content="Información Obligatoria Requerida." upper={true} line={true} br={true}/>
      
      <TextOffset content="Nombre de la Compañia: Dvloped" line={true}/>
      <TextOffset content="NIT: " line={true} br={true}/>

      <TextOffset content="Contact information:" line={true} br={true} upper={true}/>

      <TextOffset content="Email: dvloped@gmail.com" line={true}/>
      <TextOffset content="CEOs: Simón Rivera Agudelo y Juan José Sanchez Bueno" line={true} br={true}/>
    </main>
  )
}
