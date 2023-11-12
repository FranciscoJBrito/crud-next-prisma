import { PlusIcon } from "@heroicons/react/24/outline"

const CreateColum = () => {
  return (
    <div className="flex justify-center items-center w-full h-full border-2 border-dashed  border-black/20 p-6 rounded-lg cursor-pointer">
      <span className="flex items-center text-black/40">Crear columna<PlusIcon className="h-4 w-4 ml-1"/></span>
    </div>
  )
}

export default CreateColum