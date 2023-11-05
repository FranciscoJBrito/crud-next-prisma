const Form = () => {
  return (
      <form action="" className="w-full flex flex-col items-start justify-center p-10 border-[1px] border-black/10 rounded-xl">
        <label
          htmlFor="title"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Titulo de la nota
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Titulo de la nota"
          autoFocus
          className="block flex-1 border-[1px] border-black/10 rounded-xl bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />

        <label htmlFor="content">Contenido de la nota</label>
        <textarea
          name="content"
          id="content"
          placeholder="Contenido de la nota"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />

        <button className="bg-lime-400 p-4 rounded-xl">Crear</button>
      </form>
  );
};

export default Form;
