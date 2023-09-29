import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar.jsx"
import UpdateUserPage from "../UpdateUserPage/UpdateUserPage.jsx"
import DeletePage from "../DeletePage/DeletePage.jsx"
import ToDoPage from '../ToDoPage/ToDoPage'

{/* put Main here if want it visible on the page at all times */ }
{/* Main and Routes are only available when the user is logged in */ }
function App() {
  const [user, setUser] = useState(getUser())

  return (
    <body>
    <div className="App">
      {
        user ?
          <>
            {/* Main and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/login" element={<ToDoPage />} />
              <Route path="/login/account" element={<UpdateUserPage user={user} setUser={setUser} />} />
              <Route path="/login/account/delete" element={<DeletePage user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </div>
    </body>
  )
}

export default App
