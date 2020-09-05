import React ,{useState} from 'react'

const User = props=>{


    return (
        
        <div className='user'>
            <h2>Listed Users</h2>
            {props.users.map(user=>{
                return(
                    <>
                       
                        <h4>Name: {user.name}</h4>
                        <p>Email: {user.email}</p>
                        <p>Role: {user.role}</p>
                        <button onClick = {props.editMember}>Edit Members</button>
                </>
                )
                
            }

            )}
            
        </div>
    )
}
export default User