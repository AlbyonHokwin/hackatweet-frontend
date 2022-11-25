import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LastTweets from './LastTweets';
import { useState } from 'react';

function Home() {
  const [newTweet, setNewTweet] = useState('');
  const tweetLength = newTweet.length;
  const token = "7YhFQHPmxGnP0IgSH1HUKOne3_u07n_S";

  const handleAdd = () => {
    fetch('http://localhost:3000/tweets/new', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, message: newTweet }),
    })
      .then(response => response.json())
      .then(data => {
        data.result && console.log('tweet added: ', data.tweet);
        setNewTweet('');
      });
  }

  return (
    <div className={styles.container}>

      <div className={styles.leftSection} >
        <Image className={styles.logo} src="/twitter.png" alt="Logo" width={60} height={60} />
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
        <div className={styles.addSection}>
          <h1>Home</h1>
          <textarea rows="3" className={styles.inputAdd} placeholder="What's up" onChange={e => tweetLength < 280 && setNewTweet(e.target.value)} value={newTweet} />
          <div className={styles.countAndAdd}>
            <span className={styles.tweetLength}>{tweetLength}/280</span>
            <button className={styles.addBtn} onClick={() => handleAdd()} >ADD</button>
          </div>
        </div>
        <div className={styles.tweetsContainer}>
          <LastTweets />
        </div>
      </div>

      <div className={styles.rightSection} >RIGHT</div>
    </div>
  );
}

export default Home;
