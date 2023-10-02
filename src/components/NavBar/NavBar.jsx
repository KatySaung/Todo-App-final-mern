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


    <nav className="NavBar">
      <h1>Welcome, {props.user.name} !</h1>
        <Link to="/">{props.user.name}'s Todo List</Link>&nbsp;&nbsp;
        <Link to="/login">{props.user.name}'s New Todo</Link>&nbsp;&nbsp;
        <Link to="/login/id/edit">Update Todo</Link>&nbsp;&nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>&nbsp;&nbsp;
        <Link to="/login/account/delete">Delete Account</Link>&nbsp;&nbsp;
        <Link to="/login/account">Update Account</Link>&nbsp;&nbsp;
    </nav>
  )
}

export default NavBar