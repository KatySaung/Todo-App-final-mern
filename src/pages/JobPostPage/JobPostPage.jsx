import { checkToken } from "../../utilities/users-service"

// checkToken function
function JobPostPage() {
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken()
      alert(expDate.toLocaleString())
    } catch (err) {
      console.log(err)
    }
  }

  // @pages
  // JobPostPage
  // route: /jobs
  //All Links: User To Do List, All Job Posts,Log Out,Delete
  // check log in expiration
  return (
    <div>
      <h1>SEI Job Posts</h1>
      <h4>Motivation Quote</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi eius labore architecto consequatur dicta amet, ipsum atque vitae, quos perferendis ea magnam, distinctio assumenda iusto molestiae cumque saepe a.</p>
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
    </div>
  )
}

export default JobPostPage