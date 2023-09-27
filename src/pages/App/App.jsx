import './App.css'
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import JobPostPage from '../JobPostPage/JobPostPage.jsx'
import AuthPage from "../AuthPage/AuthPage.jsx"
import Main from "../../components/Main/Main"
import { getUser } from '../../utilities/users-service'
import MyPage from '../MyPage/MyPage.jsx'
import DeleteFormPage from '../DeleteFormPage/DeleteFormPage'

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
              <Route path="/jobs/my-to-do-list" element={<MyPage />} />
              <Route path="/jobs" element={<JobPostPage />} />
              <Route path="/:id" element={<DeleteFormPage />} />

              {/* Catchall route to Homepage */}
              {/* <Route path="*" element={<Navigate to="/jobs"/>} /> */}
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
