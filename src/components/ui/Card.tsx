'use client'
import { useState } from "react"
import { DropDown } from "./DropDown"
import { NoteContent } from "@/interfaces/Note"
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


const Card = (props: NoteContent) => {
  const [content, setContent] = useState(false)
  const handleEdit = () => {
    setContent(!content)
  }

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bordr-[1px] border-blck/10 w-full h-full bg-white border-[1px] broder-cream/10 p-3 rounded-lg relative">
      <div className="z-50">
      <DropDown id={props.id}/>
      </div>
      <h3 className="text-lg font-semibold text-black/80">{props.title}</h3>
      <p className="text-black/60">{props.content}</p>
    </div>
  )
}

export default Card