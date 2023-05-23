import { Banner } from "@/app/components/Banner"
import { TextOffset } from "@/app/components/TextOffset"

export default function Project ({params}) {
  const { id } = params
  return (
    <main>
      <Banner title={'Project ' + id}/>
      <TextOffset content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." line={true}/>
    </main>
  )
}
