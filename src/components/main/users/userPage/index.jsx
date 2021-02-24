import React, { useState, useEffect } from 'react';
import * as axios from 'axios';

// css
import styles from './userPage.module.css';

// img
import loader from '../../../../media/img/loader.gif';
import userPhoto from '../../../../media/img/userPhoto.png';


function UserPage(props) {
    let [userData, setUserData] = useState(null);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${props.userId}`).then((response) => {
            if (!userData) {
                setUserData(response.data)
            }
        })
    })


    return (
        <div className={styles.user__page} >
            {
                userData ?
                    <div className={styles.user__page_const
                    } >
                        <div className={styles.img__container}>
                            <img className={styles.img} src={userData.photos.large ? userData.photos.large : userPhoto} alt={userData.fullName} />
                        </div>
                        <div className={styles.info}>
                            <button className={styles.btn}>follow</button>
                            <h3 className={styles.name}>{userData.fullName}</h3>
                        </div>
                    </div > :
                    <img src={loader} alt="loading" />
            }
        </div>
    )
}

export default UserPage;