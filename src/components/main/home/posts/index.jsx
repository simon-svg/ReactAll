import React from 'react';

// css
import styles from './posts.module.css';

// components
import Post from './post';

// constants
import PostAdd from './postAdd';


function Posts(props) {
    return (
        <div className={styles.posts}>
            <PostAdd header={props.header} handleFormClick={props.handleFormClick} handleTextInner={props.handleTextInner} />
            {
                props.state.map((item) => {
                    return <Post key={item.id} img={item.img} message={item.post} like={item.likeCount} />
                })
            }
        </div>
    )
}

export default Posts;