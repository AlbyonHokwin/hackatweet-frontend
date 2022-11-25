import styles from '../styles/LastTweets.module.css';
import { useState, useEffect } from 'react';
import Tweet from './Tweet';

function LastTweets() {
    const [tweets, setTweets] = useState([]);
    const token = "7YhFQHPmxGnP0IgSH1HUKOne3_u07n_S";

    useEffect(() => {
        fetch(`http://localhost:3000/tweets/lasts/${token}`)
            .then(response => response.json())
            .then(data => {
                data.result && setTweets(data.tweets);
            });
    }, [])

    const tweetsDisplay = tweets.map((tweet, i) => {
        return <Tweet key={i} {...tweet} userImg="/twitter.png" isLike={false} likeCount={0} />
    })

    return (
        <div className={styles.container} >
            {tweetsDisplay};
        </div>
    )
}

export default LastTweets