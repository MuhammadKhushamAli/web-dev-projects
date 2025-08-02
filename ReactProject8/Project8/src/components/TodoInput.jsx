import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addIdToBeUpdated, addTodo, updateTodo } from "../features/todo/todoSlice";

export default function TodoInput() {
    const [todoMessage, setTodoMessage] = useState('');
    const isEditing = useRef(false);
    const dispatch = useDispatch();
    const idToBeUpdated = useSelector(state => state.idToBeUpdated);
    const todos = useSelector(state => state.todos);

    const id = useRef(null);

    useEffect(() => {
        if (!(isEditing.current) && idToBeUpdated !== null) {
            isEditing.current = true;
            id.current = idToBeUpdated;

            const todo = todos.find(todo => todo.id === idToBeUpdated);
            if (todo)
                setTodoMessage(todo.message);
        }
    }, [idToBeUpdated])

    function submitHandler(e) {
        e.preventDefault();
        if (isEditing.current) {
            dispatch(updateTodo({ id: id.current, message: todoMessage }));
            isEditing.current = false;
            id.current = null;
            dispatch(addIdToBeUpdated(null));
        }
        else {
            dispatch(addTodo(todoMessage));
        }
        setTodoMessage('');
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                name="Todo Messsage"
                id="todo_message"
                value={todoMessage}
                placeholder="Todo Message"
                onChange={(e) => setTodoMessage(e.target.value)}
                required />

            <input type="submit" value={isEditing.current ? "Edit It" : "Submit It"} />
        </form>
    )
}