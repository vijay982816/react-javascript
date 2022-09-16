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



    return (


        <UserContext.Provider value={{ getUsers, users }}>



            {props.children}

        </UserContext.Provider>


    )
}

export default AllUser