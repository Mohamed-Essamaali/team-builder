import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user'
import UserForm from './components/userForm'

function App() {

  const[users,setUsers]= useState([])
  const[memberToEdit,setMemberToEdit] = useState()

  const addNewUser = user=>{
    let newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      role: user.role

    }
    setUsers([...users,newUser])
  }
  const editMember = e=>{

  }
  return (
    <div className="App">
      
      <UserForm addNewUser={addNewUser} memberToEdit = {memberToEdit}/>
      <User users={users} editMember = {editMember}/>
      
     
    </div>
  );
}

export default App;
