"use client"

import { useState } from "react";
import { ITask } from "@/types/tasks";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import Modal from "./Modal";
import { editTodo } from "@/api";
import { useRouter } from "next/navigation";
interface TaskProps {
    task: ITask
}
const Task:React.FC<TaskProps> = ({ task }) => {
    const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
    const router = useRouter();
    const handelEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const updatedTask = await editTodo({
            id: task.id,
            text: taskToEdit
        });
        setTaskToEdit(taskToEdit);
        setOpenEditModal(false);
        router.refresh();
    }
  return (
        <tr>
            <td className="w-full">{task.text}</td>
            <td className="flex gap-5">

                <FiEdit size={25} className="text-blue-500" onClick={() => setOpenEditModal(true)} cursor="pointer"/>
                <Modal open={openEditModal} setOpen={setOpenEditModal}>
                    <form onSubmit={handelEditSubmit}>
                        <h3 className='font-bold text-lg'>Edit Task</h3>
                        <div className="modal-action">
                            <input
                            value={taskToEdit}
                            type="text" 
                            placeholder="Type here" 
                            className="input input-bordered w-full"
                            onChange={(e) =>
                                setTaskToEdit(e.target.value)
                            } />

                        <button type="submit" className="btn">Submit</button>
                        </div>
                    </form>
                </Modal>


                <FaRegTrashAlt size={25} className="text-red-500"/>
            </td>
        </tr>
  )
}

export default Task