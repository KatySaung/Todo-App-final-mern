import CreateUser from "../../components/CreateUser/CreateUser"
import Login from "../../components/Login/LogIn"
import Delete from "../../components/Delete/Delete"

// @ route /jobs/login
// Login Page
function LogIn(props) {
  return (
    <main>
      <h1>SEI Job Search</h1>
      <h2>LogIn Page</h2>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
      <DeleteForm setUser={props.setUser} />
    </main>
  )
}

export default LogIn