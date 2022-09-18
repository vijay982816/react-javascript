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

        const response = await fetch(`https://blank-node.vercel.app/`);


        // console.log(await response.json())

        const myjson = await response.json()


        setUsers(myjson)

    }


    //one user find 


    const oneUser = async (id) => {

        // API Call 

        const response = await fetch(`https://blank-node.vercel.app/oneuser/${id}`);
        const myjson = await response.json()

        return myjson
    }

    // Add a Note
    const addUser = async (name, age, phone) => {
        // TODO: API Call
        // API Call 

        console.log('add user is calling')
        const response = await fetch(`https://blank-node.vercel.app/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name, age, phone })
        });

        const newUser = await response.json();
        setUsers(users.concat(newUser))

        console.log(newUser, 'User added')
    }


    //update user 


    const updateUser = async (id, name, age, phone) => {
        // API Call 
        const response = await fetch(`https://blank-node.vercel.app/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, age, phone })
        });
        const json = await response.json();

        // let newUser = JSON.parse(JSON.stringify(users))
        // // Logic to edit in client
        // for (let index = 0; index < newNotes.newUser; index++) {
        //     const element = newUser[index];
        //     if (element._id === id) {
        //         newUser[index].name = name;
        //         newUser[index].age = age;
        //         newUser[index].phone = phone;
        //         break;
        //     }
        // }
        // setUsers(newUser);
    }



    //Deleting user


    const deleteUser = async (id) => {
        // API Call
        const response = await fetch(`https://blank-node.vercel.app/${id}`, {
            method: 'DELETE'
        });
        const json = response.json();
        const newUsers = users.filter((user) => { return user._id !== id })
        setUsers(newUsers)

        console.log('delete end', id)
    }



    return (


        <UserContext.Provider value={{ users, oneUser, getUsers, addUser, updateUser, deleteUser }}>



            {props.children}

        </UserContext.Provider>


    )
}

export default AllUser