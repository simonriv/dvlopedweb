import { Banner } from "../components/Banner"
import { TextOffset } from "../components/TextOffset"

export default function privacyPolicyPage(){
  return(
    <main>
      <Banner title="Politicas de privacidad" desc=""/>
      
      <TextOffset content='Dvloped ("nosotros", "nuestro" o "nos") se compromete a proteger su privacidad. Esta Política de privacidad explica cómo Dvloped recopila, usa y divulga su información personal.' line={true} br={true}/>
      <TextOffset content='Esta Política de privacidad se aplica a nuestro sitio web, dvloped.com.co y sus subdominios asociados (colectivamente, nuestro "Servicio") junto con nuestra aplicación, Dvloped. Al acceder o utilizar nuestro Servicio, usted indica que ha leído, comprendido y aceptado nuestra recopilación, almacenamiento, uso y divulgación de su información personal como se describe en esta Política de privacidad y en nuestros Términos de servicio.' line={true} br={true}/>

      <TextOffset content="Definiciones y Términos clave" upper={true} line={true} br={true}/>

      <TextOffset content="Para ayudar a explicar las cosas de la manera más clara posible en esta Política de privacidad, cada vez que se hace referencia a cualquiera de estos términos, se definen estrictamente como:" line={true} br={true}/>
    </main>
  )
}
