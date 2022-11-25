import styles from '../styles/SignUp.module.css';
import { button } from 'antd';
import { useState } from 'react'

function SignUp() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleSignUp = () => {
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
                        <input className={styles.input} type="text" name="Firstname" placeholder='Firstname' />
                        <input className={styles.input} type="text" name="UserName" placeholder='UserName' />
                        <input className={styles.input}  type="text" name="Password" placeholder='Password' />
                        <button className={styles.buttonSignUp}>Sign Up</button>
                  </div> 
            </>
          );
        };
        export default SignUp;
        <>
              {/*<div className='container'>
                    <Button type="primary" onClick={showModal}>Sign Up</Button>
                    <Modal className={styles.petitlogo} open={isModalOpen}>
                        <img src="twitter.png" alt="petitlogo" />
                        <title className={styles.title}>Create your hackatweet account</title>
                        <input type="text" name="Firstname" placeholder='Firstname' />
                        <input type="text" name="UserName" placeholder='UserName' />
                        <input type="text" name="Password" placeholder='Password' />
                        <button className={styles.buttoncompact}>Sign Up</button>
                    </Modal>
                    <p className={styles.p}>Already have an account</p>
                    <Button className={styles.buttonbordure}>Sign in</Button>

                    </div>

                



            {/* 
        <Button type="secondary" onClick={showModal}> 
        Sign In
        </Button>
        <Modal className={styles.petitlogo}> 
          <img src="twitter.png" alt="petitlogo" />
          <h2>title="Connect to hackatwwet" open={isModalOpen} onSignUp={handleSignUp}</h2>
         <input type="text" name="UserName" placeholder='UserName'/>
         <input type="text" name="Password" placeholder='Password'/>
         <button className={styles.buttoncompact}>Sign Up</button>
        </Modal> */}
        </>
