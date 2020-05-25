import React from 'react';
import WineCard from './WineCard'
const WineContainer = (props) => {

  return (
    <div>
      {props.wines.map(wine =>  <WineCard  wine = {wine} key={wine.id} />)}
    </div>
     )
}

export default WineContainer;


