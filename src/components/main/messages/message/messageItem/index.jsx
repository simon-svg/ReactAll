import React from 'react';
import MessagesForm from './messagesForm';

// css
import styles from './messageItem.module.css';


function MessageItem({messages, newMessage, handlemessagesChange, handleBtnClick}) {
    return (
        <div>
            <div className={styles.message}>
                {messages.message.map((item, i) => {
                    return (
                        <div key={i}
                            className={`${styles.message__item} ${i % 2 === 1 ? styles.message__item_me : styles.message__item_he}`}>
                            <p className={styles.message__item_inner}>{item}</p>
                        </div>
                    )
                })}
            </div>
            <MessagesForm newMessage={newMessage} handlemessagesChange={handlemessagesChange} handleBtnClick={handleBtnClick}/>
        </div>
    )
}


export default MessageItem;