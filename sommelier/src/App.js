import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';

class App extends React.Component {
  state = {
    view: 'home',
    username: null 
  }

  changeView = (view) => {
    this.setState({ view })
  }

  changeUsername = (username) => {
    this.setState({ username })
  }


  render() {
    return (
      <div className="App">
       <NavBar changeView={this.changeView} view={this.state.view} username={this.state.username} />
       {this.state.view === 'login' && <Login changeView={this.changeView} changeUsername={this.changeUsername}/>}
       {this.state.view === 'home' && <Home />}
      </div>
    );
  }
}

export default App;
