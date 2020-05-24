import React from "react";

import './Feeds.css';
const feeds = (props) => {
  return (
    <ul className="FeedUl">
      <li>
        <label>{props.comment}</label>
        <label>{props.voteCount}</label>
        <label onClick={props.upvote}>
            <span className="upvote" ></span>
        </label>
        <label>{props.details}</label>
      </li>
    </ul>
  );
};

export default feeds;
