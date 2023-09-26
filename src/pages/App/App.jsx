import './App.css'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx"
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage.jsx'
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service'


{/* put NavBar here if want it visible on the page at all times */ }

{/* NavBar and Routes are only available when the user is logged in */ }
function App() {
  const [user, setUser] = useState(getUser())


  //wizard101@gm.com
  return (
    <main className="App">
      {
        user ?
          <>
            {/* NavBar and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />

              {/*Catchall route to Homepage */}
              <Route path="*" element={<Navigate to="/orders"/>} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
