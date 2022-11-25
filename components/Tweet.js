import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Tweet.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

function Tweet(props) {
    const token = "7YhFQHPmxGnP0IgSH1HUKOne3_u07n_S";
    const [count, setCount] = useState(props.likeCount);
    const [isLike, setIsLike] = useState(props.isLike);
    const [delayStr, setDelayStr] = useState('');

    const handleDeletion = () => {
        fetch('http://localhost:3000/tweets/delete', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({token, date: props.date}),
        })
            .then(response => response.json())
            .then(data => data.result && console.log('tweet deleted'));
    };

    useEffect(() => {
        const delay = new Date(new Date() - new Date(props.date));
        const delayYear = delay.getFullYear() - 1970;
        const delayMonth = delay.getMonth();
        const delayDay = delay.getDate() - 1;
        const delayHour = delay.getHours();
        const delayMin = delay.getMinutes();

        switch (true) {
            case delayYear > 0:
                setDelayStr(`${delayYear} year${delayYear > 1 ? 's' : ''}`);
                break;
            case delayMonth > 0:
                setDelayStr(`${delayMonth} month${delayMonth > 1 ? 's' : ''}`);
                break;
            case delayHour > 0:
                setDelayStr(`${delayHour} hour${delayHour > 1 ? 's' : ''}`);
                break;
            case delayDay > 0:
                setDelayStr(`${delayDay} day${delayDay > 1 ? 's' : ''}`);
                break;
            case delayMin > 0:
                setDelayStr(`${delayMin} minute${delayMin > 1 ? 's' : ''}`);
                break;
            case delayMin <= 0:
                setDelayStr('a few seconds');
                break;
        }
    }, [])

    let likeStyle = {}
    isLike && (likeStyle = { color: '#E71870' });

    return (
        <div className={styles.container}>
            <div className={styles.tweetInfos}>
                <Image className={styles.userImg} src={props.userImg} alt="User image" width={60} height={60} />
                <div className={styles.userInfos}><span className={styles.firstname}>{props.user.firstname}</span><span className={styles.username}>@{props.user.username} - {delayStr}</span></div>
            </div>
            <div className={styles.message}>{props.message}</div>
            <div className={styles.buttons}>
                <span className={styles.likeContainer} style={likeStyle}><FontAwesomeIcon icon={faHeart} className={styles.likeIcon} onClick={() => setIsLike(!isLike)} /> {count}</span>
                {props.canDelete && <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} onClick={() => handleDeletion()}/>}
            </div>
        </div>
    )
}

export default Tweet