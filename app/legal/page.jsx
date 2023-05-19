import { Banner } from "../components/Banner"
import { TextOffset } from "../components/TextOffset"

export default function legalPage(){
  return(
    <main>
      <Banner title="Información Legal" desc=""/>
      <TextOffset content="Información Obligatoria Requerida." upper={true} line={true} br={true}/>
      
      <TextOffset content="Company name: " line={true}/>
      <TextOffset content="Porpouse:" line={true}/>
      <TextOffset content="UID:" line={true} br={true}/>

      <TextOffset content="Contact information:" line={true} br={true} upper={true}/>


      <TextOffset content="Dirección:" line={true}/>
      <TextOffset content="Email:" line={true}/>
      <TextOffset content="CEO:" line={true} br={true}/>
    </main>
  )
}
