import React from 'react';

// css
import styles from './logo.module.css';

// img
import logo from '../../../media/img/insta.webp'

function Logo(){
    return(
        <div className={styles.logo}>
            <img className={styles.img} src={logo} alt="insta"/>
        </div>
    )
}

export default Logo;