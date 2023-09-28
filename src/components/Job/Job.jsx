import { checkToken } from "../../utilities/users-service"
import "./Job.css";

// checkToken function
function Job() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
      alert(expDate.toLocaleString())
    } catch (err) {
      console.log(err)
    }
  }

  // route: /jobs
  return (
    <div>
      <h1>SEI Job Posts</h1>
      <div class="jobPage-quote">
        <p>
          "So,I hope that you will do the same for the rest of your lives. When things are going sweetly and peacefully, please pause a moment, and then say out loud, "If this isn't nice, what is?”
          ― Kurt Vonnegut, If This Isn't Nice, What Is?: Advice for the Young.
          "If this isn't nice, what is?"- In memory of Andrew Doak's Uncle Alex.
        </p>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi eius labore architecto consequatur dicta amet, ipsum atque vitae, quos perferendis ea magnam, distinctio assumenda iusto molestiae cumque saepe a.</p>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default Job