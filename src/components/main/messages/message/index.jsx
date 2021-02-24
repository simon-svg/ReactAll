import React, { useState } from 'react';
import { Route } from 'react-router-dom';

// css
import styles from './message.module.css';

// components
import MessageItem from './messageItem';

// constants
import messages from '../../../../constants/messageItem';


function Message() {
    let [messagesState] = useState(messages);
    let [newMessage, setNewMessage] = useState("")

    const handlemessagesChange = (e) => {
        setNewMessage(e.target.value);
    }

    const handleBtnClick = (e) => {
        e.preventDefault();
        setNewMessage("");
    }

    return (
        <div className={styles.message__cont}>
            {
                messagesState.map((item) => {
                    return (<Route key={item.id} path={item.path} render={
                        () => { return <MessageItem
                            newMessage={newMessage}
                            handlemessagesChange={handlemessagesChange}
                            messages={messagesState[item.id-1]}
                            handleBtnClick={handleBtnClick} /> }
                    } />)
                })
            }
        </div>
    )
}

export default Message;