import styles from '../styles/Hashtag.module.css';
import Trends from './Trends';
import Tweet from './Tweet';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function Hashtag(props) {
    const [searchedHashtag, setSearchedHashtag] = useState('');
    const [currentPath, setCurrentPath] = useState('');
    const [tweets, setTweets] = useState([]);
    const token = "7YhFQHPmxGnP0IgSH1HUKOne3_u07n_S";

    if (currentPath !== props.hashtag) {
        setCurrentPath(props.hashtag);
        setSearchedHashtag(props.hashtag);
    }

    useEffect(() => {
        if (props.hashtag) {
            fetch(`http://localhost:3000/tweets/hashtag/${props.hashtag}/${token}`)
                .then(response => response.json())
                .then(data => {
                    data.result ? setTweets(data.tweets) : setTweets([]);
                })
                .catch(error => setTweets([]));
        }
    }, [currentPath]);

    const searchForHashtag = hashtag => {
        setSearchedHashtag(hashtag);
        if (hashtag) {
            fetch(`http://localhost:3000/tweets/hashtag/${hashtag}/${token}`)
                .then(response => response.json())
                .then(data => {
                    data.result ? setTweets(data.tweets) : setTweets([]);
                })
                .catch(error => setTweets([]));
        }
    }

    const tweetsDisplay = tweets.map((tweet, i) => {
        return <Tweet key={i} {...tweet} userImg="/twitter.png" isLike={false} likeCount={0} />
    })

    return (
        <div className={styles.container}>

            <div className={styles.leftSection} >
                <Link href='/'><Image className={styles.logo} src="/twitter.png" alt="Logo" width={60} height={60} /></Link>
                <div className={styles.userSection}>
                    <div className={styles.user}>
                        <Image className={styles.userImg} src="/twitter.png" alt="User image" width={60} height={60} />
                        <div className={styles.userInfos}>
                            <div className={styles.firstname} >FirstName</div>
                            <div className={styles.username} > UserName</div>
                        </div>
                    </div>
                    <button className={styles.btnLogout}>Logout</button>
                </div>
            </div>

            <div className={styles.middleSection} >
                <div className={styles.searchSection}>
                    <h2>Hashtag</h2>
                    <input className={styles.search} placeholder="Search for #hashtag" onChange={e => searchForHashtag(e.target.value.slice(1))} value={'#' + searchedHashtag} />
                </div>
                <div className={styles.tweetsContainer}>
                    {tweetsDisplay}
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.trendsSection}>
                    <h2>Trends</h2>
                    <Trends />
                </div>
            </div>
        </div>
    );
}

export default Hashtag