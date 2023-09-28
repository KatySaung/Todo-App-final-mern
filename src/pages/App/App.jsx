import './App.css'
import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import NavBar from "../../components/NavBar/NavBar"
import JobPostPage from '../JobPostPage/JobPostPage.jsx'
import MyPage from '../MyPage/MyPage.jsx'
import DeletePage from '../DeletePage/DeletePage'
import LogInPage from '../LogInPage/LogInPage.jsx'
import UpdatePage from "../UpdatePage/UpdatePage"

{/* put Main here if want it visible on the page at all times */ }
{/* Main and Routes are only available when the user is logged in */ }
function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
          <>
            {/* Main and Routes are only available when the user is logged in */}
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<LogInPage />} />
              <Route path="/myaccount" element={<MyPage />} />
              <Route path="/login" element={<JobPostPage />} />
              <Route path="/update" element={<UpdatePage />} />
              <Route path="/delete" element={<DeletePage user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <LogInPage setUser={setUser} />
      }
    </main>
  )
}

export default App
