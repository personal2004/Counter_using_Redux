import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoAction } from '../../actions/addtodoAction';

export const AddTodo = ({ addTodo}) => {

    const handleAddTodo = (event) => {
        if (event.key === 'Enter') {
            addTodo({ workName: event.target.value });
            event.target.value = null;
        }
    };

    return (
        <input
            type="text"
            className="search"
            placeholder="Enter Your Work Here"
            onKeyDown={handleAddTodo}
        />
    );
};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo: addTodoAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(AddTodo);
