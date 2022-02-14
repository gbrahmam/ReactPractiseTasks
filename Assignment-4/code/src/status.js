import React from 'react';

export const Status = (props) => {

    return (
        <div className="status">
            <div className="icon-container">
                <div className="icon block">
                    <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Heart-128.png" alt='heart' />
                    <img src="https://cdn-icons-png.flaticon.com/512/786/786407.png" alt="share" />
                </div>
                <div className="date">
                    <p>{props.Date}</p>
                </div>
            </div>
            <div className="likes">
                <p>{props.likes}</p>
            </div>
            <div className="description">
                <p><strong>{props.description}</strong></p>
            </div>
        </div>
    )
}