import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, message: 'Hello'}],
    idToBeUpdated: null
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                message: action.payload
            }
            state.todos.push(todo);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((item) => item.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const index = state.todos.findIndex((todo) => todo.id === action.payload.id);
            state.todos[index].message = action.payload.message;
        },
        addIdToBeUpdated: (state, action) => {
            state.idToBeUpdated = action.payload;
        }
    }
});

export default todoSlice.reducer;

export const { addTodo, deleteTodo, updateTodo, addIdToBeUpdated } = todoSlice.actions;