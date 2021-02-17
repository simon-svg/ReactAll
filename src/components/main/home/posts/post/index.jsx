import React from 'react';

// css
import styles from './post.module.css';

function Post(props){
    return(
        <div className={styles.post}>
            <div className={styles.img__cont}>
                <img className={styles.img} src={props.img} alt="mean"/>
            </div>
            <p className={styles.pors__message}>{props.message}</p>
            <span className={styles.pors__like}>Like {props.like}</span>
        </div>
    )
}

export default Post;