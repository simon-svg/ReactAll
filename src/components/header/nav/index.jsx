import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from './nav.module.css';

// constants
import navigation from '../../../constants/navigation';

function Nav() {
    return (
        <nav>
            <ul className={styles.header__list}>
                {
                    navigation.map((item) => {
                        return (
                            <li className={styles.header__item} key={item.id}>
                                <NavLink className={styles.header__link}
                                    activeClassName={styles.header__link_active}
                                    to={item.path}>{item.name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;