import React from 'react';

// css
import styles from './messagesForm.module.css';


function MessagesForm({ newMessage, handlemessagesChange, handleBtnClick }) {

    

    return (
        <form className={styles.messagesForm} action="#">
            <textarea className={styles.messages__text} onChange={(e) => handlemessagesChange(e)}
                value={newMessage} name="messages__text" placeholder="text"></textarea>
            <button className={styles.messages__btn} onClick={handleBtnClick}>add text</button>
        </form>
    )
}

export default MessagesForm;