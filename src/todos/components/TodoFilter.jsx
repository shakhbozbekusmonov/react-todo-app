import PropTypes from "prop-types";

const TodoFilter = ({ onSelectType }) => {
    return (
        <div className='btn-group'>
            <button
                className='btn btn-outline-success'
                onClick={() => onSelectType("all")}>
                All
            </button>
            <button
                className='btn btn-outline-success'
                onClick={() => onSelectType("completed")}>
                Completed
            </button>
            <button
                className='btn btn-outline-success'
                onClick={() => onSelectType("uncompleted")}>
                Uncompleted
            </button>
        </div>
    );
};

TodoFilter.propTypes = {
    onSelectType: PropTypes.func,
};

export default TodoFilter;
