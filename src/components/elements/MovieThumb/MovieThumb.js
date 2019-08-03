import React from 'react';
import './MovieThumb.css';

const MovieThumb = (props) => {
    return (
        <div className="moviethumb clickable">
            <img src={props.image} alt='moviethumb'/>
        </div>
    )
};

export default MovieThumb;