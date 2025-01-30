"use client"
import { FaPlus } from "react-icons/fa";
import { addTodo } from "@/api";
import Modal from "./Modal";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";
const AddTask = () => {
  
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [task, setTask] = useState<string>('');
  const router = useRouter();
  const handelAddSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = await addTodo({
      id: uuidv4(),
      text: task
    });
    setTask(task);
    setOpenModal(false);
    router.refresh();
  }
  return (
    <div>
        <button className="btn btn-primary w-full" onClick={() => setOpenModal(true)}>
            Add New Task
            <FaPlus size={18} className="ml-2"/>
        </button>
        <Modal open={openModal} setOpen={setOpenModal}>
          <form onSubmit={handelAddSubmit}>
            <h3 className='font-bold text-lg'>Add New Task</h3>
            <div className="modal-action">
                <input 
                  type="text" 
                  placeholder="Type here" 
                  className="input input-bordered w-full"
                  onChange={(e) => 
                    setTask(e.target.value)
                  } />

            <button type="submit" className="btn">Submit</button>
            </div>
          </form>
          
        </Modal>
        
    </div>
  )
}

export default AddTask