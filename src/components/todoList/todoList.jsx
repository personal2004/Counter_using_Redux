import React from 'react';
import Todo from '../todo/todo';
import { connect } from 'react-redux';

export const TodoList = ({ items }) => {
    return (
        <div className="to-do-list">
            <span>
                {items.map((element, index) => (
                    <Todo item={element} key={index} index={index} />
                ))}
            </span>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.todoList
    };
};

export default connect(mapStateToProps)(TodoList);
