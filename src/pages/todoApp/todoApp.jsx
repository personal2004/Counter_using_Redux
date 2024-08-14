import React from 'react';
import AddToDo from '../../components/addtodo/addToDo';
import TodoList from '../../components/todoList/todoList';

const ToDoApp=()=>{

    return (
      <div>
        <div className="container">
          <div className="to-do-container">
            <AddToDo className="search" />
            <div className="space-between"></div>
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }


export default ToDoApp;
