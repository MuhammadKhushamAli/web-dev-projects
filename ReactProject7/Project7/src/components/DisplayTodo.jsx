import { useToDo } from "../context/ToDoContext"
import TodoItem from "./TodoItem";


export default function DisplayTodo() {
    const { todo } = useToDo();
    return (
        <div>
            {todo.map((todoItem) => {
                return(
                <div key={todoItem.id}>
                    <TodoItem todoItem = {todoItem}/>     
                </div>
                );
            })}
        </div>
    )
}