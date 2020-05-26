import React, { Component } from 'react'


export default class WineCard extends Component {
    state = {
        clicked: false
    }
    toggleClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }
    renderShort = () => {
    const{name,img} = this.props.wine.wine
    return (
        <div className = "wineCard">
          <img className = "image" src ={img} alt = {name} />
          <h3>Name:{name}</h3>
        </div>
        )
    }
    renderFull = () => {
        const{name,img,video,year,category,ABV,description} = this.props.wine.wine
        return (
            <div className = "wineCard">
                <img className = "image" src ={img} />
                <h3>Name:{name}</h3>
                <p>Year:{year}</p>
                <p>Type:{category}</p>
                <p>ABV:{ABV}</p>
                <p>Description:{description}</p>
                {/* <iframe src={video}></iframe>  */}
             </div>
    )
  }
    render() {
         console.log(this.state)
     return  (
        <div onClick={this.toggleClicked}>
           {this.state.clicked? this.renderFull() : this.renderShort()}
        </div>
        )
  }
}