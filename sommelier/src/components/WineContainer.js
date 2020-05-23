import React , { Component } from 'react';
import Home from './Home'
import WineCard from './WineCard'


const WineContainer = (props) => {

        return (
            <div>
              {props.wines.map(wine =>  <WineCard  wine = {wine}/>)}
            </div>
        )
    }

export default WineContainer;