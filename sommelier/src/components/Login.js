import React from 'react'

class Login extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirmation: ''
    }

nameChange = (event) => {
    this.setState({name: event.target.value})
}

emailChange = (event) => {
    this.setState({email: event.target.value})
}

passwordChange = (event) => {
    this.setState({password: event.target.value})
}

confirmationChange = (event) => {
    this.setState({confirmation: event.target.value})
}

handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.confirmation){
    this.props.changeView('home')
    this.props.changeName(this.state.name)
    } else {
        alert("Incorrect Password")
    }
}

render() {
    return (
       
           <form className='horizontal-flex'>
            <h1>Create a Sommelier Account</h1>
            <input name="name" value={this.state.name} onChange={this.nameChange} placeholder="Name" />
            <input name="email" value={this.state.email} onChange={this.emailChange} placeholder="Email" />
            <input name="password" value={this.state.password} onChange={this.passwordChange} placeholder="Password" />
            <input name="confirmation" value={this.state.confirmation} onChange={this.confirmationChange} placeholder="Confirm Password" />
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
           </form>
       
    )
}

}

export default Login