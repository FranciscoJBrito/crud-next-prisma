import { Note } from "@prisma/client"
import { DropDown } from "./DropDown"
import { UseNote } from "@/interfaces/Note"
const Card = (props: UseNote) => {
  return (
    <div className="bordr-[1px] border-blck/10 w-full h-full bg-white border-[1px] broder-cream/10 p-3 rounded-lg relative">
      <DropDown id={props.id}/>
      <h3 className="text-lg font-semibold text-black/80">{props.title}</h3>
      <p className="text-black/60">{props.content}</p>
    </div>
  )
}

export default Card