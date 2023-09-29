import { Component } from "react";
import { signUp } from "../../utilities/users-service";


// use the class field approach(can also use constructor field approach)
export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

// handleChange method for user to type in form fields
    handleChange = (evt) => {
        this.setState({
          [evt.target.name]: evt.target.value,
          error: ''
        });
      };

// handleSubmit method. LIFO
handleSubmit = async (evt) => {
    evt.preventDefault( );
    try {
        const formData = {...this.state}
        delete formData.error; 
        delete formData.confirm;
        const user = await signUp(formData)
        this.props.setUser(user)
    } catch (err) {
        this.setState({error: "Sign Up Failed - Try Again"})
    }
}
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
   
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter name here..." name="name" value={this.state.name} onChange={this.handleChange} required />
                    <label>Email</label>
                    <input type="email" placeholder="Enter email here..." name="email" value={this.state.email} onChange={this.handleChange} required />
                    <label>Password</label>
                    <input type="password" placeholder="Enter password here..." name="password" value={this.state.password} onChange={this.handleChange} required />
                    <label>Confirm</label>
                    <input type="password" placeholder="Confirm password here..." name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                    <button type="submit" disabled={disable}>SIGN UP</button>
                </form>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
       
    )
}
}