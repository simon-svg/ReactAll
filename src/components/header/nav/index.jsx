import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from './nav.module.css';

function Nav() {
    return (
        <nav>
            <ul className={styles.header__list}>
                <li className={styles.header__item}>
                    <NavLink className={styles.header__link} to="/">home</NavLink>
                </li>
                <li className={styles.header__item}>
                    <NavLink className={styles.header__link} to="/aboute">about</NavLink>
                </li>
                <li className={styles.header__item}>
                    <NavLink className={styles.header__link} to="/contact">contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;