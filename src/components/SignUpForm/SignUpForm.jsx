import { Component } from "react";
import { signUp } from "../../utilities/users-service";


// use the class field approach(can also use constructor field approach)
export default class SignUpForm extends Component {
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
// need to prevent the form from being submitted to the server with "evt.preventDefault( );"
handleSubmit = async (evt) => {
    evt.preventDefault( );
    try {
         // throw new Error( ) 

        // We don't want to send the 'error' or 'confirm' property,
        // so let's make a copy of the state object, then delete them
        // the formData is a copy of the state
        const formData = {...this.state}// making a copy
        delete formData.error; //deleting properties
        delete formData.confirm;
         // The promise returned by the signUp service method
        //  will resolve to the user object included in the
        // payload of the JSON Web Token (JWT)
        const user = await signUp(formData)
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
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
    )
}
}