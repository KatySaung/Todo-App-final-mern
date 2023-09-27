import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"


// DO NOT USE anchor tags because of the refresh. So need to import link from react and use link tags. 
function Main( props ) {

  const handleLogOut = () => {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }

  // HOW TO STYLE navbar in main.jsx. created class in app.css
  return (
<div>
<h1>Welcome, {props.user.name}</h1>
  <div class = "navbar">
      <Link to="/jobs/my-to-do-list">My To Do List</Link>
      <br />
      <Link to="" onClick={handleLogOut}>Log Out</Link>
      <br />
      <Link to={props.user._id}>Delete</Link>
    </div>
</div>
    

  )
}

export default Main