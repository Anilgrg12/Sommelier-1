import React, { Component } from 'react'
import WineContainer from './WineContainer'
import SearchBar from './SearchBar'

import Jumbotron from 'react-bootstrap/Jumbotron'


export default class Home extends Component {

    state = {
        wines: []
    }
    
    componentDidMount(){
        fetch('http://localhost:3004/wine_foods')
        .then(response => response.json())
        .then(wines => {
            this.setState({wines})
    })
    }

    filterWines = (type) => {
        if(type !== "All") {
          this.setState({
            wines: this.state.wines.filter(wine => wine.type === type )
          })
        } else {
          this.setState({wines: this.state.wines})
        }
      }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <Jumbotron>
                        <h1>Hello, world!</h1>
                        <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                        </p>
                    </Jumbotron><br></br>
                </div>
             <WineContainer wines={this.state.wines} />
             <SearchBar filterWines={this.filterWines} />
            </div>
        )
    }
}
