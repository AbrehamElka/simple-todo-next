import { ITask } from './types/tasks';
const baseUrl = 'http://localhost:3001/tasks';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}`, {cache: 'no-store'});
    const todos = await res.json();

    return todos;
}