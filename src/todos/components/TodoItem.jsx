import { RiDeleteBin6Fill, RiPenNibFill } from "react-icons/ri";
import PropTypes from "prop-types";

const TodoItem = ({
    index,
    id,
    title,
    completed,
    onCheckTodo,
    onDelete,
    onUpdate,
}) => {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <span className='me-2'>{index + 1}.</span>
                <input
                    className='form-check-input me-2'
                    type='checkbox'
                    defaultChecked={completed}
                    onClick={() => onCheckTodo(id)}
                />
                {completed ? <s>{title}</s> : <p className='mb-0'>{title}</p>}
            </div>

            <div className='d-flex'>
                <button
                    className='btn btn-outline-danger me-2'
                    onClick={() => onDelete(id)}>
                    <RiDeleteBin6Fill />
                </button>
                <button
                    className='btn btn-outline-primary'
                    onClick={() => onUpdate(id)}>
                    <RiPenNibFill />
                </button>
            </div>
        </li>
    );
};

TodoItem.propTypes = {
    index: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    completed: PropTypes.bool,
    onCheckTodo: PropTypes.func,
    onDelete: PropTypes.func,
    onUpdate: PropTypes.func,
};

export default TodoItem;
