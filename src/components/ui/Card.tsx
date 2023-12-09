
const Card = ({title, id}: {title: string, id: number}) => { 

  return (
    <div  className="w-full h-min px-3 py-2 rounded-lg bg-custom-gray my-1 cursor-pointer border-[1px] border-custom-gray hover:border-[1px] hover:border-lime-400">
      <h4>{title}</h4>
    </div>
  )
}

export default Card