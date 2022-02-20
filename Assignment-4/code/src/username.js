import React from 'react';

export const Username = (props) =>{

    return(
        <div className="username">
            <div className="text block">
                <p className="name"><strong>{props.Name}</strong></p>
                <p className="location">{props.location}</p>
            </div>
            <div className="btn">
                <img className="dot-btn" src="https://i.stack.imgur.com/twIm6.png" alt='menu'></img>
            </div>
        </div>
    )
}