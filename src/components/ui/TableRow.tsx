import { DropDown } from "./DropDown";

interface Props {
      task: string,
      due: number | string,
      status: string,
      project: string
}

const TableRow = ({task, due, status, project}: Props) => {
  return (
    <tr className="py-4 border-[1px] border-custom-gray w-full">
      <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <input
            type="checkbox"
            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
          />

          <span>{task}</span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {due}
      </td>
      <td className="px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-500/40">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 3L4.5 8.5L2 6"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p className="text-sm font-normal">{status}</p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        {project}
      </td>
      <td className="relative px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
        <DropDown id={1} columID={1}/>
      </td>
    </tr>
  );
};

export default TableRow;
