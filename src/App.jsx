import './App.css'
import User from './components/User.jsx'
import { Routes, Route, Link } from "react-router-dom";
import AddUser from './components/AddUser.jsx';
import UpdateUser from './components/UpdateUser.jsx';

export default function App() {
  return (
    <>

      





      <Routes>
        <Route path="/" element={<User />} />

        <Route path="/adduser" element={<AddUser/>} />

      <  Route path="/updateuser/:id" element={<UpdateUser />} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>

    </>

  )
}
