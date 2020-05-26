import React, { Component } from 'react'
import WineContainer from './WineContainer'
import SearchBar from './SearchBar'
import Favorite from './Favorite'

import Jumbotron from 'react-bootstrap/Jumbotron'


export default class Home extends Component {

    state = {
        wines: [],
        displayWines: [],
        favoriteWines: []
    }
    
    componentDidMount(){
        fetch('http://localhost:3004/wine_foods')
        .then(response => response.json())
        .then(wines => {
            this.setState({wines: wines, displayWines: wines})
    })
    }

    addFavorite = (wine) => {
        this.setState({favoriteWines: [...this.state.favoriteWines, wine]})
      }

    filterWines = (type) => {
        if(type !== "All") {
          this.setState({displayWines: this.state.wines.filter(wine => wine.type === type )})
        } else {
          this.setState({displayWines: this.state.wines})
        }
      }

    render() {
        console.log(this.state)
        return (
            <div>
                <div>
                    <Jumbotron>
                        <h1>Sommelier!</h1>
                        <p>
                        A sommelier may be responsible for the development of wine for the delivery of wine service and training for the other restaurant staff. Working along with the culinary team, they pair and suggest wines that will best complement each particular food menu item. This entails the need for a deep knowledge of how food and wine, beer, spirits and other beverages work in harmony. A professional sommelier also works on the floor of the restaurant and is in direct contact with restaurant patrons. The sommelier has a responsibility to work within the taste preference and budget parameters of the patron.
                        In modern times, a sommelier's role may be considered broader than working only with wines, and may encompass all aspects of the restaurant's service, with an enhanced focus on wines, beers, spirits, soft-drinks, cocktails, mineral waters, and tobaccos.
                        </p>
                    </Jumbotron><br></br>
                </div>
             <WineContainer wines={this.state.wines} />
             <SearchBar filterWines={this.filterWines} />
             <Favorite favoriteWines={this.state.favoriteWines} />
            </div>
        )
    }
}
