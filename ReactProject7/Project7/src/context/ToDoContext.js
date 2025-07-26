import { useContext } from "react";
import { createContext } from "react";

const todoContext = createContext({
    todo:
        [
            {
                id: 0,
                message: 'The Context Values/Data are Not Provided',
                completed: false
            }
        ],
    EditToDo: (todoId, newMsg) => { },
    DeleteToDo: (todoId) => { },
    CreateToDo: (todoMsg) => { },
    ToggleComplete: (todoId) => { }
})

export const TodoContextProvider = todoContext.Provider;

export function useToDo() {
    return useContext(todoContext);
}