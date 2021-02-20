import React from 'react';
import sea from '../../../media/img/sea.jpg';

// css
import styles from './home.module.css';

// components
import Posts from './posts';

function Home(props) {

    return (
        <div className={styles.home}>
            <img className={styles.img} src={sea} alt="sea" />
            <Posts header={props.header} state={props.state}
                handleFormClick={props.handleFormClick} handleTextInner={props.handleTextInner} />
        </div>
    )
}
export default Home;