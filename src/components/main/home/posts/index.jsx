import React from 'react';

// css
import styles from './posts.module.css';

// components
import Post from './post';

// constants
import posts from '../../../../constants/posts';


function Posts() {
    return (
        <div className={styles.posts}>
            {
                posts.map((item) => {
                    return <Post key={item.id} img={item.img} message={item.post} like={item.likeCount} />
                })
            }
        </div>
    )
}

export default Posts;