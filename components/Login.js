import styles from '../styles/Login.module.css';
import { Button, Modal } from 'antd';
import { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

function Login() {


    const [isModalSignUpOpen, setIsModalSignUpOpen] = useState(false);
    const [isModalSignInOpen, setIsModalSignInOpen] = useState(false);

    const showSignUpModal = () => {
        setIsModalSignUpOpen(true);
    };
    const handleSignIn = () => {
        setIsModalOpen(false);
    };
    const handleSignUp = () => {
        setIsModalOpen(false);
    };

    const showSignInModal = () => {
        setIsModalSignInOpen(true);
    };



    return (

        <>
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

                    <Button type="primary" onClick={showSignUpModal} className={styles.buttoncompact}>
                        Sign Up
                    </Button>

                    <Modal className={styles.modal} open={isModalSignUpOpen} footer={null}>
                        <SignUp />
                    </Modal>
                    <p className={styles.p}>  Already have an account </p>

                    <Button type="secondary" onClick={showSignInModal} className={styles.buttonbordure}>
                        Sign In
                    </Button>
                    <Modal className={styles.modal} open={isModalSignInOpen} footer={null}>
                        <SignIn />
                    </Modal>






                </div>

            </div>

        </>



    );
};



export default Login;
