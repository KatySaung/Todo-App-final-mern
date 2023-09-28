import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LogInForm"
import DeleteForm from "../../components/DeleteForm/DeleteForm"

// @ route /jobs/login
// Login Page
function LogInPage(props) {
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

export default LogInPage