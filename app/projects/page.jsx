import { Banner } from "../components/Banner"
import { ProjectList } from "../components/ProjectList"
import { BtnContact } from "../components/btnContact"

export default function ProjectsPage(){
  return(
    <main>
      <Banner title="Nuestros Proyectos" desc="Estos son algunos proyectos realizados por nosotros que pueden servirte de ejemplo." />
      <ProjectList more={false} sec={false} cant={0}/>
      <BtnContact sub="Háblanos de tu proyecto" link="/contact" label="Contáctanos ahora"/>
    </main>
  )
}
