import React from "react";
import headerContext from '../../context';

// css
import styles from './header.module.css';

// components
import Logo from "./logo";
import Nav from "./nav";

function Header() {
    return (
        <headerContext.Consumer>
            {
                (value) => {
                    return (
                        <header style={{ backgroundColor: value }} className={styles.header} >
                            <Logo />
                            <Nav />
                        </header>
                    )
                }
            }
        </headerContext.Consumer>
    )
}

export default Header;