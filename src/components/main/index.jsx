import React from 'react';
import { Route } from 'react-router-dom';

// components
import Home from './home';
import Messages from './messages';
import Contact from './contact';

// css
import styles from './main.module.css';


function Main(props) {
    return (
        <main className={styles.main}>
            <Route exact path="/" render={() => {
                return <Home header={props.header} state={props.state}
                    handleFormClick={props.handleFormClick} handleTextInner={props.handleTextInner} />
            }
            } />
            <Route path="/messages" render={Messages} />
            <Route path="/contact" render={Contact} />
        </main>
    )
}

export default Main;