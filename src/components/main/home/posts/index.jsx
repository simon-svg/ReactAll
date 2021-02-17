import React from 'react';

// css
import styles from './posts.module.css';

// imgs
import mean1 from '../../../../media/img/man.jpg';
import mean2 from '../../../../media/img/man2.jpg';

// components
import Post from './post';


function Posts(){
    return(
        <div className={styles.posts}>
            <Post img={mean1} message="good job bro!" like="10" />
            <Post img={mean2} message="it's very awesome" like="52" />
        </div>
    )
}

export default Posts;