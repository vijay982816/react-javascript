import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext.jsx'


const SingleUser = ({ imgUrl, name, phone, age, id }) => {





    const navigate = useNavigate()


    const { deleteUser } = useContext(UserContext)




    


    const handleDelete = () => {
        deleteUser(id)

    }
    return (
        <>


            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10">
                            <img className="w-full h-full rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                                {name}
                            </p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{age}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                        {phone}
                    </p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center md:text-left">

                    <button className="my-1 px-3 py-1 font-semibold text-green-900 leading-tight bg-green-100 rounded-full mx-2" onClick={() => navigate(`updateuser/${id}`)}>

                        Update
                    </button>

                    <button className=" my-1 font-semibold text-red-900 leading-tight rounded-full bg-red-100 px-3 py-1"
                        onClick={handleDelete}>

                        Delete
                    </button>

                    <button className=" my-1 font-semibold text-red-900 leading-tight rounded-full bg-red-100 px-3 py-1"

                        onClick={() => navigate(`profile/${id}`)}

                    >

                        Profile
                    </button>

                </td>
            </tr>



            {/* {
                update == "open" && <UpdateUser updatingUser={{ imgUrl, name, phone, age, id }} />


            }


            {
                console.log(update)
            } */}
        </>

    )
}

export default SingleUser