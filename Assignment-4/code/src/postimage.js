import React from 'react';

export const Postimage = (props) =>{

    return (
        <div className="image">
            <img className="postImage" src={props.postimage} alt="POST" />
        </div>
    )
}