import Task from "./Task"
import { ITask } from "@/types/tasks"
interface TodoListProps {
    tasks: ITask[]
}

const TodoList:React.FC<TodoListProps> = ({ tasks }) => {
  return (
    <div>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                {tasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TodoList