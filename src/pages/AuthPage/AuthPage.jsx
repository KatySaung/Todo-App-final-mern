import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LogInForm"


// WK14D1: Part 2:
// Create Auth Page with user set to null in App.jsx
function AuthPage(props) {
  return (
    <main>
      <h1>SEI Job Search</h1>
      <h2>To Do App</h2>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage