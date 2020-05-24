import React, { useState, useEffect } from "react";

import Feeds from "../../components/NewsFeed/Feeds/Feeds";
import "../NewsFeed/Feeds/Feeds.css";
const newsFeed = (props) => {
  //created a state to manage vote count
  const [vote, setVote] = useState({count: 0});
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFeeds(result.hits);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const upvoteHandler = (id, e) => {
    
    console.log('Not clear what to to so just added the value from api!!!')
  };

  const hideHandler = (obj) => {
    let objectID = obj.objectID;
    setFeeds(feeds.filter(feed => feed.objectID !== objectID));
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="FeedUl">
        {feeds.map((feed, index) => (
          <Feeds
            key={feed.objectID}
            NewsFeed={feed}
            upVote={upvoteHandler.bind(this, feed.objectID)}
            hideFeed={hideHandler}
          ></Feeds>
        ))}
      </ul>
    );
  }
};

export default newsFeed;
