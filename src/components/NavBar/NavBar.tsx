import MyModal from "../Modal/Modal"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[60px] border-[1px] border-black/10 px-4">
      <h1>Logo</h1>
      <MyModal title="Crear nota"/>
    </div>
  )
}

export default NavBar