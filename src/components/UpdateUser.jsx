import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import UserContext from '../context/UserContext.jsx'

const UpdateUser = () => {




    const intialUser = {
        name: '',
        age: '',
        phone: ''

    }




    const [user, setUser] = useState(intialUser)


    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


    const { oneUser, updateUser } = useContext(UserContext)


    const submitForm = (id) => {



        // addUser(user.name, user.age, user.phone)
        updateUser(id, user.name, user.age, user.phone)

        setUser({
            name: "",
            age: "",
            phone: ""
        })

        navigate('/')

    }

    const navigate = useNavigate();


    const handleCancel = () => {


        setUser({
            name: "",
            age: "",
            phone: ""
        })

        navigate('/')

    }


    const { id } = useParams();

    const settingAlltheData = async (id) => {


        const singleuser = await oneUser(id)


        setUser(singleuser)

        // // console.log(useParams())

        // console.log(id)


    }

    useEffect(() => {
        settingAlltheData(id)
    }, [])

    return (
        <>

            <div >

                <div className={`py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0  `} id="modal">
                    <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
                        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                            <div className="w-full flex justify-start text-gray-600 mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wallet" width="52" height="52" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                                </svg>
                            </div>
                            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Update User Details</h1>
                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">User Name</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. Hitesh" value={user.name} onChange={onChange} name='name' />




                            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Age</label>
                            <input id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Ex. 20" value={user.age} onChange={onChange} name='age' />




                            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Phone</label>
                            <div className="relative mb-5 mt-2">
                                <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">


                                    <svg aria-hidden="true" focusable="false" className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" /></svg>




                                </div>
                                <input id="phone" type='text' className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="Ex.9828161010" value={user.phone} onChange={onChange} name='phone' />
                            </div>







                            <div className="flex items-center justify-start w-full">
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={()=>submitForm(id)}>Submit</button>
                                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={handleCancel}>Cancel</button>
                            </div>
                            <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" onClick={handleCancel} aria-label="close modal" role="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="w-full flex justify-center py-12" id="button">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"


                        onClick={() => setOpen(!open)}

                    >Open Modal</button>
                </div> */}




            </div>


        </>
    )
}

export default UpdateUser