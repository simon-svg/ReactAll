import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './home';
import Aboute from './aboute';
import Contact from './contact';

// css
import styles from './main.module.css';


function Main() {
    return (
        <main className={styles.main}>
            <Route exact path="/" component={Home} />
            <Route path="/aboute" component={Aboute} />
            <Route path="/contact" component={Contact} />
        </main>
    )
}

export default Main;