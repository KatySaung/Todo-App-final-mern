import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LogInForm"

// Login Page
// passing from components
function AuthPage(props) {
  return (
    <main>
      <h1>AuthPage</h1>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage