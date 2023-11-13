interface Props {
  onClick: () => void
}

const CreateNoteBtn = (props: Props) => {
  return (
    <button className="w-full h-full border-[1px] border-custom-gray border-dashed text-custom-gray rounded-lg hover:bg-white/5 hover:text-custom-black hover:border-custom-black"
    onClick={props.onClick}
    >
      crear nota +
    </button>
  );
};

export default CreateNoteBtn;
