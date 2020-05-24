import React, { useState } from 'react';

import Feeds from '../../components/NewsFeed/Feeds/Feeds';

const newsFeed = (props) => {
    //created a state to manage vote count
    const [vote, setVote] = useState(12);

    const upvoteHandler = () => {
        setVote(vote + 1);
    }
    return(
        <div>
            <Feeds comment="36" voteCount={vote} upvote={upvoteHandler} details="Welcome to first row of the feed"></Feeds>
        </div>
    )
    
}

export default newsFeed;