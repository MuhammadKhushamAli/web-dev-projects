import { useDispatch, useSelector } from "react-redux";
import { addIdToBeUpdated, deleteTodo } from "../features/todo/todoSlice";


export default function TodoList()
{
    const todos = useSelector(state => state.todos);

    const dispatch = useDispatch();

    return(
        <ul>
            {
            todos.map((todo) => (
                <li
                key={todo.id}> 
                    <div>
                        {todo.message}
                    </div>
                    <button onClick={() => {
                        dispatch(addIdToBeUpdated(todo.id));
                    }}>Edit</button>
                    <button
                    onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
                </li>
            ))}
        </ul>
    )
}