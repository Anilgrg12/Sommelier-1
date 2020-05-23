// import React from 'react';
import React, { Component } from 'react'

export default class WineCard extends Component {

    state = {
        clicked: false
    }


    toggleClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }


    renderShort = () => {
    const{name,img} = this.props.wine
    return (

        <div className = "wineCard">
          <img className = "image" src ={img} alt = {name} />
          <h3>Name:{name}</h3>
        </div>
        )

        
    }


    
    
    renderFull = () => {
        const{name,img,video,year,category,ABV,description} = this.props.wine
        return ( 
            <div className = "wineCard">
                <img className = "image" src ={img} />
                <h3>Name:{name}</h3>
                <h3>Year:{year}</h3>
                <h3>Type:{category}</h3>
                <h3>ABV:{ABV}</h3>
                <h3>Description:{description}</h3>
                {/* <iframe src={video}></iframe>  */}
            
                <button> Add to Favorite </button>

             </div>
    )
    
  }

    render() {
     return  (
        <div onClick={this.toggleClicked}>
           {this.state.clicked? this.renderFull() : this.renderShort()}
        </div>)
         
  }
}

