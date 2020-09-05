import React, { useState } from 'react'
import {FormGroup} from 'reactstrap'


const UserForm = props=>{
    const [user,setUser] = useState({
        name:'',
        email:'',
        role:''
    })
    //edit members
    const[member,setMember] = useState(props.memberToEdit || {name: '', email: '', role: ''})
    const handleChange = e=>{

       
        setUser({...user,[e.target.name]:e.target.value})
        console.log('user in form', user)
        
    }
    const reset = ()=>{
        setUser({
            name:'',
            email:'',
            role:''
        })
    }
    const submitForm = e=>{
        e.preventDefault();
        props.addNewUser(user)
        console.log('form submitted')
        reset();
    }

    return (
        <div className='form'>
            <h1>User Registration</h1>
            <form onSubmit={submitForm}>
                <FormGroup>
                    <label htmlFor='name'>Name</label>
                    <input id ='name' type='text' name='name' value={user.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='email'>Email</label>
                    <input id ='email'  name='email' type='email' value={user.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <label htmlFor='role'>  Role</label>
                    <select id='role' name='role' onChange={handleChange}>
                        <option default></option>
                        <option value='backend engineer'>backend engineer</option>
                        <option value='frontend engineer'>frontend engineer</option>
                        <option value='designer'>designer</option>
                    </select>
                </FormGroup>
                <button type='submit'>Add New User</button>
                    
            

         </form>
        </div>
      
    )
}
export default UserForm