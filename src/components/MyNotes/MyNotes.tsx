import MyModal from "../Modal/Modal"
import CreateNoteBtn from "../ui/CreateNoteBtn"

const MyNotes = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-4 w-full h-full border-[1px] border-custom-gray rounded-lg p-4 overflow-scroll">
            <MyModal title="Crear Nota"/>
    </div>
  )
}

export default MyNotes