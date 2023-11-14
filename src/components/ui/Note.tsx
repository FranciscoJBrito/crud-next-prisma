import { TrashIcon } from "@heroicons/react/20/solid";
import { useNotes } from "@/hooks/useNotes";

interface Props {
      id: string | number,
      title: string,
      content: string
}
const Note = (props: Props) => {
  const { deleteNote } = useNotes();
  return (
    <div className="bg-custom-second-black/50 overflow-hidden rounded-lg p-4 max-w-full h-28 min-h-fit hover:bg-custom-gray cursor-pointer relative transition-all my-3">
      <h3>{props.title}</h3>
      <p className="mt-1 text-sm text-white/60">{props.content}</p>
      <TrashIcon className="absolute top-2 right-2 h-6 w-6 text-red-500/20 bg-red-500/5 border-[1px] border-red-500/20 p-1 rounded-full hover:text-red-500 hover:bg-red-500/20 hover:border-red-500 transition-all"
      onClick={() => deleteNote(props.id)}
      />
    </div>
  )
}

export default Note