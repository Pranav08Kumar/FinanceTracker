import "./Cards";
import React, {useState} from 'react';

function Cards(props){
const classes = 'Cards '+ props.className;
    return <div className={classes}>{props.children}</div>

}
export default Cards;