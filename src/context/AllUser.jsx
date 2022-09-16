import React from 'react'
import { useState } from 'react'
import UserContext from './UserContext.jsx'

const AllUser = (props) => {


    // //     const host = "http://localhost:5000"
    // // const intialusers = []


    const [users, setUsers] = useState([])

    // Get all user
    const getUsers = async () => {
        // API Call 

        const response = await fetch(`https://3001-vijay982816-blanknode-mtewnqs608r.ws-us65.gitpod.io/`);


        // console.log(await response.json())

        const myjson = await response.json()


        setUsers(myjson)

    }




    // Add a Note
    const addNote = async (name, age, phone) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            },
            body: JSON.stringify({ title, description, tag })
        });

        const note = await response.json();
        setNotes(notes.concat(note))
    }





    return (


        <UserContext.Provider value={{ getUsers, users }}>



            {props.children}

        </UserContext.Provider>


    )
}

export default AllUser