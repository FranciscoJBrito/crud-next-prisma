'use client'
import { useSortable } from "@dnd-kit/sortable";
import {CSS} from '@dnd-kit/utilities';

const Card = ({title, key}: {title: string, key: number}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: key});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };


  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="w-full h-min px-3 py-2 rounded-lg bg-custom-gray my-1 cursor-pointer border-[1px] border-custom-gray hover:border-[1px] hover:border-lime-400">
      <h4>{title}</h4>
    </div>
  )
}

export default Card