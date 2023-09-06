import { useState } from "react";
import { TodoForm, TodoFilter, TodoList } from "./components";

const Todos = () => {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || [
            {
                id: 1,
                title: "LeetCode masala ishlashim kerak.",
                completed: false,
            },
            {
                id: 2,
                title: "Ingiliz tilidan listening qilishim kerak.",
                completed: false,
            },
            {
                id: 3,
                title: "Newcastlega IT kursga borishim kerak.",
                completed: false,
            },
        ]
    );
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedType, setSelectedType] = useState("all"); // the state three values all, completed, uncompleted

    const visibleTodos =
        selectedType === "completed"
            ? todos.filter((todo) => todo.completed)
            : selectedType === "uncompleted"
            ? todos.filter((todo) => !todo.completed)
            : todos;

    const updateLocalStorage = (newTodos) => {
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    const addOrUpdateTodo = (todo) => {
        if (selectedIndex >= 0) {
            const updatedTodos = todos.map((t) =>
                t.id === selectedIndex ? { ...t, title: todo.title } : t
            );
            setTodos(updatedTodos);
            updateLocalStorage(updatedTodos);
        } else {
            const newTodo = { id: todos.length + 1, ...todo };
            const newTodos = [...todos, newTodo];
            setTodos(newTodos);
            updateLocalStorage(newTodos);
        }
        setSelectedIndex(-1);
    };

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
        updateLocalStorage(newTodos);
    };

    const toggleTodoCompletion = (id) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedTodos);
        updateLocalStorage(updatedTodos);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-12 col-lg-8 offset-lg-2 my-3'>
                    <TodoForm
                        addTodo={(todo) => addOrUpdateTodo(todo)}
                        todos={todos}
                        selectedIndex={selectedIndex}
                    />
                </div>
                <div className='d-flex justify-content-center mb-3'>
                    <TodoFilter
                        onSelectType={(type) => setSelectedType(type)}
                    />
                </div>
                <div className='col-12 col-md-12 col-lg-8 offset-lg-2'>
                    <TodoList
                        todos={visibleTodos}
                        onCheckTodo={(id) => toggleTodoCompletion(id)}
                        onDelete={(id) => deleteTodo(id)}
                        onUpdate={(id) => setSelectedIndex(id)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Todos;
