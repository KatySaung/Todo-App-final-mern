import Delete from "../../components/Delete/Delete"

function DeletePage({ user, setUser }) {
    return (
        <>
            <h1>Delete Your Account</h1>
            <Delete user={user} setUser={setUser} />
        </>
    )
}

export default DeletePage
