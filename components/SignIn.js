import styles from '../styles/SignIn.module.css';
import { button } from 'antd';
import { useState } from 'react'

function SignIn() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleSignIn = () => {
        setIsModalOpen(false);
    };


        return (
            <>
                 <div className={styles.container} >
                 <div className={styles.logologin}>
                        <img src="twitter.png" alt="petitlogo" />
                    </div>
                    <br></br>
                        <titlelogin className={styles.titlelogin}>Create your hackatweet account</titlelogin>
                        <br></br>
                        <input className={styles.input} type="text" name="UserName" placeholder='UserName' />
                        <input className={styles.input}  type="text" name="Password" placeholder='Password' />
                        <button className={styles.buttonSignUp}>Sign Up</button>
                  </div> 
            </>
          );
        };
        export default SignIn;
