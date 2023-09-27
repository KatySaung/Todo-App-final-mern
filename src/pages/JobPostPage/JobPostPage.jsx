import { checkToken } from "../../utilities/users-service"

// Add checkToken function
function JobPostPage( ) {
  const handleCheckToken = async( )=>{
    try {
      const expDate = await checkToken( )
      alert(expDate.toLocaleString( ))
    } catch(err) {
      console.log(err)
    }
  }

  // @pages
  // route: /jobs
//User To Do List page
// Link to All Job Posts
// Link to User To Do's
// Link to return to Log Out 
// check log in expiration
    return (
      <div>
      <h1>User Main Page</h1>
      <h2>SEI Job Posts</h2>

      <h4>Motivation Quote</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi excepturi eius labore architecto consequatur dicta amet, ipsum atque vitae, quos perferendis ea magnam, distinctio assumenda iusto molestiae cumque saepe a.</p>
      
      <button onClick={handleCheckToken}>Check Log In Expiration</button>
      </div>
    )
  }
  
  export default JobPostPage