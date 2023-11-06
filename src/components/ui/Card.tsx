import { DropDown } from "./DropDown"
const Card = (props: {title: string, content: string}) => {
  return (
    <div className="bordr-[1px] border-blck/10 w-full h-full bg-white border-[1px] broder-cream/10 p-3 rounded-lg relative">
      <DropDown />
      <h3 className="text-lg font-semibold text-black/80">{props.title}</h3>
      <p className="text-black/60">{props.content}</p>
    </div>
  )
}

export default Card