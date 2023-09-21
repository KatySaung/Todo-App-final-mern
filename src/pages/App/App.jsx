import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx"
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage.jsx'
import AuthPage from "../AuthPage/AuthPage.jsx"
import NavBar from "../../components/NavBar/NavBar"
import { getUser } from '../../utilities/users-service'

// Define userstate in App 
// Initially the useState  value is set to (null).This value for the state, is set to null to initialize the user to null. Later it will be set with a truthy value useState({ }).
// WK14D1: Part 2: Now Set user back to null because working on the auth page. Auth page will not show up if not null ({ }).
// the getUser() function will check the 3 states of the user(the 3 functions created in the utilities->users-service)
// Below if statement,If user is logged in go Routes pages if not user go to AuthPage
// Need to reference NewOrderPage as a component, this will make it easier to pass props directly like the React way
// NavBar is not dependent on userState, it canbe above the user. If top level component issue use React fragment<></>
// if truthy in below ternary than will load in Nav bar

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
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  )
}

export default App
