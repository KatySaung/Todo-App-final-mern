import UpdateUser from "../../components/UpdateUser/UpdateUser"

function UpdateUserPage({ user, setUser }) {
    return (
      <>
      <h1>Update User Page</h1>
      <p>{user.name }---------------------this is a user name</p>
      <p>{ user.email }--------------------this is a user email</p>
      <UpdateUser user={user} setUser={setUser} />
      
      </>
    )
  }
  
  export default UpdateUserPage