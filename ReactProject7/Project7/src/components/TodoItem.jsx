import { useState } from "react";
import { useToDo } from "../context/ToDoContext";

export default function TodoItem({ todoItem }) {
    const [isUnderEditing, setIsUnderEditing] = useState(false);
    const [todoNewText, setTodoNewText] = useState(todoItem.message);

    const { EditToDo, DeleteToDo, ToggleComplete } = useToDo();
    return (
        <div>
            <div>
                <input type="checkbox"
                    name="Is_Completed"
                    id="isCompleted"
                    checked={todoItem.isCompleted} 
                    onClick={() => ToggleComplete(todoItem.id)}/>

                <input type="text"
                    name="todoMessage"
                    id="todoMessage"
                    value={todoNewText}
                    readOnly={!isUnderEditing}
                    disabled={!isUnderEditing}
                    onChange={(e) => setTodoNewText(e.target.value)} />
            </div>

            <button
                onClick={() => {

                    if(todoItem.isCompleted) gitreturn;

                    if (isUnderEditing) {
                        EditToDo(todoItem.id, todoNewText);
                        setIsUnderEditing(false);
                    }
                    else {
                        setIsUnderEditing(true);
                    }
                }}>
                {isUnderEditing ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                }</button>

            <button
                onClick={() => DeleteToDo(todoItem.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6" />
                    <path d="M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
            </button>
        </div>
    )
}