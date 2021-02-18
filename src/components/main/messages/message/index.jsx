import React from 'react';
import { Route } from 'react-router-dom';

// css
import styles from './message.module.css';

// components
import MessageItem from './messageItem';

// constants
import messages from '../../../../constants/messageItem';

function Message() {
    return (
        <div className={styles.message__cont}>
            {
                messages.map((item) => {
                    return (<Route key={item.id} path={item.path} render={
                        () => { return <MessageItem he1={item.he1} me1={item.me1} he2={item.he2} me2={item.me2} he3={item.he3} me3={item.me3} /> }
                    } />)
                })
            }
        </div>
    )
}

export default Message;