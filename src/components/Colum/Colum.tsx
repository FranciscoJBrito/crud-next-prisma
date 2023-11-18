import {useState} from 'react'
import { Colum } from '@prisma/client'
import { useGlobalContext } from '@/hooks/useGlobalContext'

const Colum = (colum: Colum) => {
  const { updateColum } = useGlobalContext();
  const [title, setTitle] = useState('')
  const handleBlur = () => {
    updateColum({
      projectID: colum.projectID,
      title: title,
      id: colum.id
    });
  }


  return (
    <div className='w-full h-auto bg-custom-gray/50 rounded-lg p-4'>
      <h4 contentEditable='true' className='pl-2 focus:rounded-sm focus-visible:outline-lime-500 focus-visible:outline-1 focus-visible:outline-none focus-visible:shadow-custom-lime'
      onInput={(e) => setTitle(e.currentTarget.textContent || '')}
      onBlur={handleBlur}
      >{colum.title}</h4>
    </div>
  )
}

export default Colum