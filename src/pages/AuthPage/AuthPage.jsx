import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LogInForm"
import DeleteForm from "../../components/DeleteForm/DeleteForm"


// WK14D1: Part 2:
// Main Page Auth Page with user set to null in App.jsx
function AuthPage(props) {
  return (
    <main>
      <h1>SEI Job Search</h1>
      <h2>To Do App</h2>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
      <DeleteForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage