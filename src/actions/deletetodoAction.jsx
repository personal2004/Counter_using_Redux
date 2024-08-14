export const deleteTodoAction=(todo)=>{
    return {
        type: 'DELETE_TODO',
        payload: todo
    };
}