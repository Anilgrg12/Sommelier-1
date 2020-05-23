import React, { Component } from 'react'
import WineContainer from './WineContainer'

export default class Home extends Component {

    state = {
        wines: []
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/wines')
        .then(response => response.json())
        .then(wines => {
            this.setState({wines})
    }
)
    }

    render() {
        console.log(this.state)
        return (
            <div>

             <WineContainer wines={this.state.wines} />
                
            </div>
        )

        

           
            }
}
