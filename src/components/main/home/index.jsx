import React from 'react';
import sea from '../../../media/img/sea.jpg';

// css
import styles from './home.module.css';

// components
import Posts from './posts';

function Home() {
    return (
        <div className={styles.home}>
            <img className={styles.img} src={sea} alt="sea" />
            <Posts />
        </div>
    )
}
export default Home;