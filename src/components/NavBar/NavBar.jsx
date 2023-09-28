import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"


// @components>NavBar.jsx
// Nav Links here
function NavBar(props) {
  const handleLogOut = () => {
    userService.logOut();
    props.setUser(null);
  }

  return (

    <nav>
      <h1>Welcome, {props.user.name} !</h1>
      <ul>
        <li><Link to="/login">{props.user.name}'s To Do List</Link></li>
        <li><Link to="/login/jobpage">Job Page</Link></li>
        <li><Link to="" onClick={handleLogOut}>Log Out</Link></li>
      </ul>
      <ul>
        <li><Link to="/login/account/delete">Delete Account</Link></li>
        <li><Link to="/login/account">Update Account</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar