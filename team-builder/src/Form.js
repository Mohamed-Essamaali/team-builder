import React, { useState } from 'react';


const Form = ()=>{

    const [user, setUser] = useState({Name:" ",Email: " ", Role:" "});
    const handleChange = event=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const handleSubmit = event=>{
        event.preventDefault();
    }
console.log(user);

    return (

        <div className="App">
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Name:
                <input 
                name="name"
                type="text"
                value={user.name}
                onChange = {event=>handleChange(event)}
                />
            </label>

            <label>
                Email:
                <input 
                name="email"
                type="text"
                value={user.email}
                onChange = {event=>handleChange(event)}
                />
            </label>

            <label>
                Role:
                <input 
                name="role"
                type="text"
                value={user.role}
                onChange = {event=>handleChange(event)}
                />
            </label>

<button > Submit !!</button>

        </form>
        </div>
    )
}

export default Form;