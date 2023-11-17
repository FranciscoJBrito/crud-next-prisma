import React from 'react'

interface Props {
  title: string
}

const Colum = (props: Props) => {
  return (
    <div className='w-full h-auto bg-custom-black'>
      <h4>{props.title}</h4>
    </div>
  )
}

export default Colum