import styles from '../styles/Home.module.css';
import tweet from '../reducers/tweets';


function Home() {
  return (

    <div className={styles.Home} >

      <div className={styles.colonneleft} >
        <div className={styles.logo}>
          <img src="twitter.png" alt="Logo" />
        </div>
      </div>

      <div className={styles.colonneright} >
        <div className={styles.petitlogo}>
          <img src="twitter.png" alt="petitlogo" />
          </div>
          <div className={styles.rangement}>
          <h1 className={styles.title}>SEE WHAT'S</h1>
          <h1 className={styles.title}>HAPPENING</h1>
          </div>
          <h2 className={styles.soustitre}>JOIN HACKATWEET TODAY.</h2>
          <button className={styles.buttoncompact}>Sign Up</button>
          <p className={styles.p}>Already have an account</p>
          <button className={styles.buttonbordure}>Sign in</button>


        
      </div>

    </div>
  );
}

export default Home;
