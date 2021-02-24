import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from './logo.module.css';


function Logo() {
    return (
        <div className={styles.logo}>
            <h1 className={styles.img}>
                <NavLink to="/">S</NavLink>
            </h1>
        </div>
    )
}

export default Logo;