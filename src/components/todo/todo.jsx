import React from 'react';
import { connect } from 'react-redux';
import './todo.css';
import { deleteTodoAction } from '../../actions/deletetodoAction';
import { bindActionCreators } from 'redux';

const Todo = ({ item, index, deleteTodoById }) => {
    return (
        <div className="to-do">
            <span className="to-do-name">{item.workName}</span>
            <span className="space"></span>
            <button className="to-do-delete" onClick={() => deleteTodoById(index)}>Delete</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deleteTodoById: deleteTodoAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(Todo);
