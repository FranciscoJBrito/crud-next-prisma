interface Props {
  title: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="w-60 h-48 p-4 rounded-lg bg-custom-second-black mx-4 cursor-pointer">
      <h3 className="text-white font-semibold">{props.title}</h3>
    </div>
  );
};

export default ProjectCard;
