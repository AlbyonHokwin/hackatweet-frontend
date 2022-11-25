import styles from '../styles/Trends.module.css';
import Link from 'next/link'
import { useState, useEffect } from 'react';

function Trends() {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/tweets/trends')
            .then(response => response.json())
            .then(data => {
                data.result && setTrends(data.trends);
            });
    }, []);

    const trendsDisplay = trends.map((trend, i) => {
        return (
            <div key={i} className={styles.trend}>
                <Link href={`/hashtag/${trend.hashtag}`}><h3 className={styles.hashtag}>#{trend.hashtag}</h3></Link>
                <p className={styles.counter}>{trend.count} Tweet{trend.count > 1 && 's'}</p>
            </div>
        );
    });

    return (
        <div className={styles.container}>
            {trendsDisplay}
        </div>
    )
}

export default Trends