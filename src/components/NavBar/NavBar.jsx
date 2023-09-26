import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"

// DO NOT USE anchor tags because of the refresh. So need to import link from react and use link tags. 
function NavBar( props ) {

  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }
  return (
    <nav>
      <h1>Welcome, {props.user.name}</h1>
      <Link to="/orders">All Job Posts</Link>
      &nbsp; | {" "}
      <Link to="/orders/new">New Order</Link>
      <br />
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>

  )
}

export default NavBar