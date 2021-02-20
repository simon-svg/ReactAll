import React from 'react';

// css
import styles from './postAdd.module.css';


function PostAdd(props){
    return(
        <form className={styles.post__form} action="#">
            <textarea className={styles.form__text} onChange={props.handleTextInner} name="form__text" placeholder="comment"></textarea>
            <button onClick={props.handleFormClick} className={styles.form__btn}>add post</button>
        </form>
    )
}

export default PostAdd;