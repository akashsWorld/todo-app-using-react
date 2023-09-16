import { ToDoCardProps } from "../utils/PropsTypes";
import { AiFillDelete } from "react-icons/ai";
const ToDoCard = ({
  title,
  description,
  createdAt,
  onDelete,
}: ToDoCardProps) => {
  return (
    <div className="h-56 w-full my-5 flex justify-center">
      <div className="h-full bg-gray-400 w-[55vw] p-3 justify-between flex flex-col">
        <div className="flex flex-row justify-between">
          <h2 className="font-headLandOne text-3xl font-bold mr-12">{title}</h2>
          <AiFillDelete size={28} onClick={() => onDelete(createdAt)} />
        </div>
        <h3 className="mt-2 font-ebGaraMond text-2xl font-semibold">
          Description
        </h3>
        <p className="text-xl font-normal h-fit text-ellipsis w-full overflow-auto shadow-sm shadow-gray-500 p-2 for-minimum-height ">
          {description}
        </p>

        <p className="text-2xl font-ebGaraMond">{createdAt.toDateString()}</p>
      </div>
    </div>
  );
};

export default ToDoCard;
