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
    const addUser = async (name, age, phone) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`https://3001-vijay982816-blanknode-mtewnqs608r.ws-us65.gitpod.io/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name, age, phone })
        });

        const newUser = await response.json();
        setUsers(users.concat(newUser))

        console.log('add user ended')
    }





    return (


        <UserContext.Provider value={{ users, getUsers, addUser }}>



            {props.children}

        </UserContext.Provider>


    )
}

export default AllUser