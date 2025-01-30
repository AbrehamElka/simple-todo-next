import { ITask } from './types/tasks';
const baseUrl = 'http://localhost:3001/tasks';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}`, {cache: 'no-store'});
    const todos = await res.json();

    return todos;
}

export const addTodo = async (task: ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
    });

    const todo = await res.json();

    return todo;
}