import React, { createRef } from 'react';

// css
import styles from './messagesForm.module.css';


function MessagesForm(){

    const messagesText = createRef();

    const handleBtnClick = (e) => {
        e.preventDefault();

        alert(messagesText.current.value)
    }

    return(
        <form className={styles.messagesForm} action="#">
            <textarea className={styles.messages__text} ref={messagesText} name="messages__text" placeholder="text"></textarea>
            <button className={styles.messages__btn} onClick={handleBtnClick}>add text</button>
        </form>
    )
}

export default MessagesForm;