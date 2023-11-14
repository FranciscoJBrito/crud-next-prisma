import { TrashIcon } from "@heroicons/react/20/solid"

interface Props {
      title: string,
      content: string
}

const Note = (props: Props) => {
  return (
    <div className="border-[1px] border-custom-gray overflow-hidden rounded-lg p-4 max-w-full h-28 min-h-fit hover:bg-custom-gray/30 cursor-pointer relative">
      <h3>{props.title}</h3>
      <p className="mt-1 text-sm text-white/60">{props.content}</p>
      <TrashIcon className="absolute top-2 right-2 h-6 w-6 text-red-500/20 bg-red-500/5 border-[1px] border-red-500/20 p-1 rounded-full hover:text-red-500 hover:bg-red-500/20 hover:border-red-500"/>
    </div>
  )
}

export default Note