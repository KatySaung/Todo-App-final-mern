import './App.css'
import { useState } from 'react'
import { Routes, Route  } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import JobPostPage from '../JobPostPage/JobPostPage.jsx'
import AuthPage from "../LogInPage/LogInPage.jsx"
import Main from "../../components/Main/Main"
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
            <Main user={user} setUser={setUser} />
            <Routes>
              <Route path="/jobs/login" element={<LogInPage />} />
              <Route path="/jobs/my-to-do-list" element={<MyPage />} />
              <Route path="/jobs" element={<JobPostPage />} />
              <Route path="/update" element={<UpdatePage user={user} setUser={setUser} />} />
              <Route path="/delete" element={<DeletePage user={user} setUser={setUser} />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
