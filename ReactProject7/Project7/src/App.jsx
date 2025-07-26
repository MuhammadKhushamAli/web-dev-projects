import { useState } from "react"
import { TodoContextProvider } from './context/ToDoContext'
import { InputTodo, DisplayTodo } from './components'
import { useEffect } from "react";

function App() {
  const [todo, setToDo] = useState([]);

  function CreateToDo(todoMsg) {
    setToDo(todo => [{
      id: Date.now(),
      message: todoMsg,
      isCompleted: false
    }, ...todo]);
  }

  function EditToDo(todoId, todoNewMsg) {
    setToDo(todo => todo.map((todoItem) => todoItem.id === todoId ? { ...todoItem, message: todoNewMsg } : todoItem));
  }

  function DeleteToDo(todoId) {
    setToDo(todo => todo.filter((todoItem) => todoItem.id != todoId));
  }

  function ToggleComplete(todoId) {
    setToDo(todo.map((todoItem) => todoItem.id === todoId ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem));
  }

  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todo"));

    if (todo && todo.length > 0) {
      setToDo(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <TodoContextProvider value={{ todo, CreateToDo, EditToDo, DeleteToDo, ToggleComplete }}>
      <InputTodo />
      <DisplayTodo />
    </TodoContextProvider>
  )
}

export default App
