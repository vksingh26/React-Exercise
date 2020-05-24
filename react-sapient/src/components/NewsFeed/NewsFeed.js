import React, { useState, useEffect } from "react";
import Feeds from "../../components/NewsFeed/Feeds/Feeds";
import "../NewsFeed/Feeds/Feeds.css";
import getFeeds from "../../getFeeds";
const newsFeed = (props) => {
  //created a state to manage vote count
  const [vote, setVote] = useState({ count: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFeeds().then(
      (result) => {
        setIsLoaded(true);
        setFeeds(result.hits);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);

  const upvoteHandler = (id) => {
    const index = feeds.findIndex((feed) => {
      console.log(feed);
      return feed.objectID === id;
    });
    const feed = Object.assign({}, feeds[index]);
    feed.points = feed.points + 1;
    feeds[index] = feed;
    setFeeds({ feeds: feeds });
    console.log("Not clear what to to so just added the value from api!!!");
  };

  const hideHandler = (obj) => {
    let objectID = obj.objectID;
    setFeeds(feeds.filter((feed) => feed.objectID !== objectID));
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
            upVote={upvoteHandler}
            hideFeed={hideHandler}
          ></Feeds>
        ))}
      </ul>
    );
  }
};

export default newsFeed;
