import React, {useState} from 'react';
// import ToDoComponent from './components/ToDoComponent';
// import Login from './components/DN';
// import DemoNextUI from './components/DemoNextUi';
// import UserContainer from './components/UserContainer';
import  StudentForm  from './components/StudentForm';


export default function App() {
// const {isLogin, setIslogin} = useState(false);
// console.log(useState)

// const onCLickHandler = () =>{
//   setIslogin(true)


  return (
  //    <div className='App'>
  //      {isLogin === true ? <ToDoComponent/> : <Login/>}
  //       <button onClick={onCLickHandler}>
  //         {isLogin === true ? "Log out button":"Login button"}
  //       </button>
  //    </div>
//  <DemoNextUI/>
/* <UserContainer/> */
<StudentForm/>
  );
}

