const Form = () => {
  return (
      <form action="" className="w-full flex items-center justify-center flex-col p-10 border-[1px] border-black/10">
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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </form>
  );
};

export default Form;
