
const Button = ({text}: {text: string}) => {
  return (
    <button className="text-base text-custom-black py-2 px-5 rounded-lg bg-lime-400">
      {text}
    </button>
  )
}

export default Button