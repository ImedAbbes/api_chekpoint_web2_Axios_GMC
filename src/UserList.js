import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList(){
    const[list,setList]= useState()
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setList(response.data))
    })
    return (
        <div id="container">
            {list?.map(e => (
                <div id="card">
                    <h1>{e.name}</h1>
                    <p>{e.email}</p>
                </div>
            ))}
        </div>
    )
}

export default UserList