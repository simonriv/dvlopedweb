import { Banner } from "../components/Banner"
import { ProjectList } from "../components/ProjectList"
import { BtnContact } from "../components/btnContact"

export default function ProjectsPage(){
  return(
    <main>
      <Banner title="Nuestros Proyectos" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <ProjectList more={false} sec={false} cant={0}/>
      <BtnContact sub="Háblanos de tu proyecto" link="/contact" label="Contáctanos ahora"/>
    </main>
  )
}
