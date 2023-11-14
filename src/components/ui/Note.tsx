interface Props {
      title: string,
      content: string
}

const Note = (props: Props) => {
  return (
    <div className="border-[1px] border-custom-gray overflow-hidden rounded-lg p-4 max-w-full h-28 break-all hover:bg-custom-gray/30 cursor-pointer ">
      <h3>{props.title}</h3>
      <p className="mt-2 text-white/60 text-ellipsis truncate ...">{props.content}</p>
    </div>
  )
}

export default Note