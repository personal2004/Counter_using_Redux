
const initialState = [{name:'Kowsalya',email:'Kowsalyakav34@gmail.com'}];

const formReducer = (state = initialState, action) =>{
  switch (action.type) {
    case 'ADD_TOForm':
      if (action.payload) {
        return [...state, action.payload];
      }
      return state;
      
    default:
      return state;
  }
};

export default formReducer;
