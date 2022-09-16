import { useEffect } from "react"
import { useContext } from "react"
import UserContext from "../context/UserContext.jsx"
import SingleUser from "./SingleUser.jsx"

const User = () => {




    const { getUsers, users } = useContext(UserContext)

    useEffect(() => {
        getUsers()
        console.log(users)
    }, [])


    return (
        <>

            {/* 
            {users.map((element) =>




                <P>{elment.name}</P>






            )} */}


            <div className="antialiased font-sans bg-gray-200">
                <div className="container mx-auto px-4 sm:px-8">
                    <div className="py-8 lg:px-60">
                        <div>
                            <h2 className="text-2xl font-semibold leading-tight">Users</h2>
                        </div>

                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                User
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Age
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Phone
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {/* 

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
                                                            Hitesh kumawat
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">20</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    8740096375
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center md:text-left">

                                                <button className="my-1 px-3 py-1 font-semibold text-green-900 leading-tight bg-green-100 rounded-full mx-2">

                                                    Update
                                                </button>

                                                <button className=" my-1 font-semibold text-red-900 leading-tight rounded-full bg-red-100 px-3 py-1">

                                                    Delete
                                                </button>

                                            </td>
                                        </tr> */}




                                        {users.map((element) => {


                                            return <SingleUser key={element._id} imgUrl={element.imgUrl} name={element.name} phone={element.phone} age={element.age} />
                                        }






                                        )}

                                    </tbody>
                                </table>


                                <div
                                    class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                 
                                    <div class="inline-flex mt-2 xs:mt-0">
                                        <button
                                            class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                            Add User
                                        </button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>









        </>


    )
}

export default User