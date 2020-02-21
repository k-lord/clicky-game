import React from "react";
import "./style.css"


const Tile = props => (
  <a onClick = {() => props.selectBachelorette(props.name)}>
    <img className = "img-tile" alt={props.name} src={props.image} />
  </a>
  
);

export default Tile;
