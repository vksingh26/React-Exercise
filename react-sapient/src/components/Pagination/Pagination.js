import React from 'react';

import './Pagination.css';

const pagination = (props) => {
    const prevFeedHandler = () => {
        console.log('Need to handle!!!');
    }

    const nextFeedHandler = () => {
        console.log('Need to handle!!!');
    }
    return (
        <div className="Pagination">
            <span className="cursor-pointer MARGIN_LEFT MARGIN_RIGHT" onClick={prevFeedHandler}>Previout</span>
            <span>|</span>
            <span className="cursor-pointer MARGIN_LEFT MARGIN_RIGHT" onClick={nextFeedHandler}>Next</span>
        </div>
    )
}

export default pagination;