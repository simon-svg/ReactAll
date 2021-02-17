import React, { Component } from "react";

// css
import styles from './header.module.css';

// components
import Logo from "./logo";
import Nav from "./nav";

class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Logo />
                <Nav />
            </header>
        )
    }
}

export default Header;