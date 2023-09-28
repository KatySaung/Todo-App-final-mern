import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"


// @components>Main.jsx
// Nav Links here
// DO NOT USE anchor tags because of the refresh. So need to import link from react and use link tags. 
 // Delegate to the users-service
// Update state will also cause a re-render
function Main( props ) {
  const handleLogOut = () => {
    userService.logOut();
    props.setUser(null);
  }

  return (
<>
<header id="header">
<h1>Welcome, {props.user.name} !</h1>
<nav id="nav-bar">
  <ul>
      <li><Link to="/jobs/my-to-do-list">My To Do List</Link></li>
      <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      <li><Link to="/delete-user">Delete Account</Link></li>
      </ul>
      </nav>
</header>
</>
  )
}

export default Main