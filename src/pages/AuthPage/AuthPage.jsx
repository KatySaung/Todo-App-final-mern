import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LogInForm"

// Login Page
// passing from components
function AuthPage(props) {
  return (
    <main>
      <h1>To Do App </h1>
      <p>The beginning of organizing a new you with... The To Do App! </p>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage