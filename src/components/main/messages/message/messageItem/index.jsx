import React from 'react';

// css
import styles from './messageItem.module.css';


function MessageItem(props) {
    return (
        <div className={styles.message}>
            <div className={`${styles.message__item} ${styles.message__item_he}`}>
                <p className={styles.message__item_inner}>{props.he1}</p>
            </div>
            <div className={`${styles.message__item} ${styles.message__item_me}`}>
                <p className={styles.message__item_inner}>{props.me1}</p>
            </div>
            <div className={`${styles.message__item} ${styles.message__item_he}`}>
                <p className={styles.message__item_inner}>{props.he2}</p>
            </div>
            <div className={`${styles.message__item} ${styles.message__item_me}`}>
                <p className={styles.message__item_inner}>{props.me2}</p>
            </div>
            <div className={`${styles.message__item} ${styles.message__item_he}`}>
                <p className={styles.message__item_inner}>{props.he3}</p>
            </div>
            <div className={`${styles.message__item} ${styles.message__item_me}`}>
                <p className={styles.message__item_inner}>{props.me3}</p>
            </div>
        </div>
    )
}


export default MessageItem;