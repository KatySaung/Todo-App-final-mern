import { Component } from "react";
import { createUser } from "../../utilities/users-service";


// use the class field approach(can also use constructor field approach)
export default class CreateUser extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    // The object passed to setState is merged with the current state object
    // The handleChange method needs to go below the state and above the render.
    // This allows the user to type into the texboxes(make changes to the form fields)
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      };

// handleSubmit method
// LIFO in this callstack,the handleSubmit is the first into the stack
// The LIFO order callstack, every call function has to be resolved before coming back to the first one: handleSubmit,users-service.js,usersAPI.js)
// payload of the JSON Web Token (JWT)
handleSubmit = async (evt) => {
    evt.preventDefault( );
    try {
        const formData = {...this.state}
        delete formData.error; 
        delete formData.confirm;
        const user = await createUser(formData)
        this.props.setUser(user)
    } catch (err) {
        this.setState({error: "Sign Up Failed - Try Again"})
    }
}
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
        <div>
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>CREATE NEW USER ACCOUNT</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
    )
}
}