import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const TodoList = ({ todos, onCheckTodo, onDelete, onUpdate }) => {
    return (
        <ul className='list-group'>
            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    index={index}
                    onCheckTodo={onCheckTodo}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            ))}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array,
    onCheckTodo: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
};

export default TodoList;
