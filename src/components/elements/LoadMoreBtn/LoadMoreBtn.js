import React from 'react';
import './LoadMore.css';

const LoadMoreBtn = (props) => {
    return (
        <div className="loadMoreBtn" onClick={props.onclick}>
            <p>{props.text}</p>
        </div>
    )
};

export default LoadMoreBtn;