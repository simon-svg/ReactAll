import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './home';
import Messages from './messages';
import Contact from './contact';

// css
import styles from './main.module.css';


function Main() {
    return (
        <main className={styles.main}>
            <Route path="/home" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/contact" component={Contact} />
        </main>
    )
}

export default Main;