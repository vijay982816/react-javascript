import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AllUser from './context/AllUser.jsx'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>





		<BrowserRouter>
			<AllUser>


				<App />


			</AllUser>
		</BrowserRouter>,









	</React.StrictMode>
)