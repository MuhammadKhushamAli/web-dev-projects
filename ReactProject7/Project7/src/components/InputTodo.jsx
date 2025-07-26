import { useState } from "react"
import { useToDo } from "../context/ToDoContext";

export default function InputTodo() {
    const [todoMsg, setTodoMsg] = useState('');
    const { CreateToDo } = useToDo();

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();

                if(!todoMsg) return;

                CreateToDo(todoMsg);

                setTodoMsg('');
            }}>
                <input type="text" name="Todo Message" id="Todo Message"
                    value={todoMsg} required
                    onChange={(e) => setTodoMsg(e.target.value)} />

                <input type="submit" value="Add" />
            </form>
        </div>
    )
}