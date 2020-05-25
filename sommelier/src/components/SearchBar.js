import React from 'react';


// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'


const SearchBar = (props) => {
  return (
    <div>
        <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterWines(e.target.value)}>
        <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Wine">Wines</option>
        </select>
      </label>
    </div>
  );
}


export default SearchBar;
