import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

function Home() {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftSection} >
        <Link href="/" ><Image className={styles.logo} src="/twitter.png" alt="Logo" width={60} height={60} /></Link>
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
          <input className={styles.inputAdd} placeholder="What's up" />
          <div className={styles.countAndAdd}>Count & ADD</div>
        </div>
        <div className={styles.tweetsContainer}>TWEETS</div>
      </div>

      <div className={styles.rightSection} >RIGHT</div>
    </div>
  );
}

export default Home;
