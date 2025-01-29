import { FaPlus } from "react-icons/fa";

const AddTask = () => {
  return (
    <div>
        <button className="btn btn-primary w-full">
            Add New Task
            <FaPlus size={18} className="ml-2"/>
        </button>
    </div>
  )
}

export default AddTask