import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import UserContext from '../context/UserContext.jsx'


const Profile = () => {

    const navigate = useNavigate()


    const intialUser = {
        name: '',
        age: '',
        phone: ''

    }


    const { oneUser, deleteUser } = useContext(UserContext)

    const [user, setUser] = useState(intialUser)



    const { id } = useParams();

    const settingAlltheData = async (id) => {


        const singleuser = await oneUser(id)


        setUser(singleuser)

        // // console.log(useParams())

        // console.log(id)


    }




    const handleDelete = () => {
        deleteUser(id)
        navigate('/')

    }
    useEffect(() => {
        settingAlltheData(id)
    }, [])
    return (
        <>




            <div className="max-w-2xl mx-auto">

                <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto mt-10">
                    <div className="flex justify-end px-4 pt-4">
                        <button id="dropdownButton" lassName="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            onClick={() => navigate('/')}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                        </button>

                        <div id="dropdown"
                            className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                            <ul className="py-1" aria-labelledby="dropdownButton">
                                <li>
                                    <a href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export
                                        Data</a>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col items-center py-10">
                        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                        <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.name}</h3>


                        <span className="text-sm text-gray-500 dark:text-gray-400">phone:{user.phone}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Age:{user.age}</span>

                        <div className="flex mt-4 space-x-3 lg:mt-6">
                            <a href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                                onClick={() => navigate(`/updateuser/${id}`)}
                            >Update</a>
                            <a href="#"
                                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800" onClick={handleDelete}>Delete</a>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Profile