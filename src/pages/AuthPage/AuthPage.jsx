import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

// Login Page
// passing from components
function AuthPage(props) {
  return (
    <main>
      <h1>To Do App</h1>
      <aside>
      <p> "My Uncle Alex, who is up in Heaven now, one of the things he found objectionable about human beings was that they so rarely noticed it when times were sweet. We could be drinking lemonade in the shade of an apple tree in the summertime, and Uncle Alex would interrupt the conversation to say, "If this isn't nice, what is?" 
      "So I hope that you will do the same for the rest of your lives. When things are going sweetly and peacefully, please pause a moment, and then say out loud, "If this isn't nice, what is?” ― Kurt Vonnegut"
      "Special Thanks to Andrew Doak for sharing this with SEI team"

      </p>
      </aside>
      <h2>The beginning of organizing a new you with... The To Do App!</h2>
      <SignUpForm setUser={props.setUser} />
      <LoginForm setUser={props.setUser} />
    </main>
  )
}

export default AuthPage