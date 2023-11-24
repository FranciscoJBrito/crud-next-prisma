'use client'


const Card = ({title}: {title: string}) => {

  return (
    <div className="w-full h-min px-3 py-2 rounded-lg bg-custom-gray my-1 cursor-pointer hover:bg-white/20">
      <h4>{title}</h4>
    </div>
  )
}

export default Card