import './App.css';
import { useState} from 'react';
import { addTodoForm } from './actions/formaddAction';
import { useSelector, useDispatch } from 'react-redux';

const App=()=>{

  const Data = useSelector((state) => state.formdata);
  const dispatch = useDispatch();

  const [logindata,setlogindata]=useState({
    name:'',
    email:'',
  });
   
  const handlesubmit=()=>{
    dispatch(addTodoForm(logindata));
    setlogindata({
        name:'',
        email:'',
    })
   };
  
  return (
    <div className="app">
      <form>
            <div>
                  <label>Name:</label>
                  <input type='text' onChange={
                    (event)=>setlogindata((prevdata)=>({
                    ...prevdata,name:event.target.value,
                    }))}>
                  </input>
            </div>
            <div>
                    <label>Email:</label>
                    <input type='email' onChange={(event)=>setlogindata((prevdata)=>({
                    ...prevdata,email:event.target.value,
                      })
                    )}>
                    </input>
            </div>
        <button onClick={handlesubmit}>Submit</button>
        <table>
            <tbody>
              <tr>
                <th>Name:</th>
                <th>Email:</th>
              </tr>
              {Data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
