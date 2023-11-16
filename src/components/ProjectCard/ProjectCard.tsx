
import Link from "next/link";

interface Props {
  id: string | number,
  title: string;
}


const ProjectCard = (props: Props) => {

  return (
    <Link href={`/projects/${props.id}`} className="w-60 h-48 p-4 rounded-lg bg-custom-second-black ml-4 cursor-pointer">
      <h3 className="text-white font-semibold">{props.title}</h3>
    </Link>
  );
};

export default ProjectCard;
