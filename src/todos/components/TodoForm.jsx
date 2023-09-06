import PropTypes from "prop-types";
import { useRef } from "react";

const TodoForm = ({ addTodo, todos, selectedIndex }) => {
    const inputRef = useRef(null);

    return (
        <form
            onSubmit={(evt) => {
                evt.preventDefault();
                addTodo({ title: inputRef.current.value, completed: false });
                evt.target.reset();
            }}>
            <div className='input-group'>
                <input
                    className='form-control'
                    type='text'
                    ref={inputRef}
                    placeholder='Add a new todo...'
                    name='todo'
                    defaultValue={todos[selectedIndex - 1]?.title}
                />
                <button className='btn btn-primary' type='submit'>
                    Add
                </button>
            </div>
        </form>
    );
};

TodoForm.propTypes = {
    addTodo: PropTypes.func,
    todos: PropTypes.array,
    selectedIndex: PropTypes.number,
};

export default TodoForm;
