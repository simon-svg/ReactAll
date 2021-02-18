import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// css
import styles from './messages.module.css';

// components
import Dialogs from './dialogs';
import Message from './message';


function Messages() {
    return (
        <BrowserRouter>
            <div className={styles.messages}>
                <Dialogs />
                <Message />
            </div>
        </BrowserRouter>
    )
}

export default Messages;