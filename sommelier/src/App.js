import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';

class App extends React.Component {
  state = {
    view: 'home',
    name: null 
  }

  changeView = (view) => {
    this.setState({ view })
  }

  changeName = (name) => {
    this.setState({ name })
  }


  render() {
    return (
      <div className="App">
       <NavBar changeView={this.changeView} view={this.state.view} name={this.state.name} />
       {this.state.view === 'login' && <Login changeView={this.changeView} changeName={this.changeName}/>}
       {this.state.view === 'home' && <Home />}
      </div>
    );
  }
}

export default App;
