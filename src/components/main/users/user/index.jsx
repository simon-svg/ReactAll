import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from './user.module.css';

// img
import userPhoto from '../../../../media/img/userPhoto.png';
import loader from '../../../../media/img/loader.gif';


function User({ usersData, setUserId }) {

    return (
        <div className={styles.all__users}>
            {
                usersData.length !== 0 ?
                    usersData.map((item) => {
                        return (
                            <div className={styles.user} key={item.id}>
                                <div className={styles.user__info}>
                                    <NavLink exact to={`/users/profile/${item.id}`}
                                        className={styles.user__img_container} onClick={() => {setUserId(item.id)}}>
                                        <img className={styles.user__img} src={item.photos.small ? item.photos.small : userPhoto} alt={item.name} />
                                    </NavLink>
                                    {item.followed ? <button className={styles.user__btn}>unfollow</button> :
                                        <button className={styles.user__btn}>follow</button>}
                                </div>
                                <div className={styles.user__info}>
                                    <h3 className={styles.user__name}>{item.name}</h3>
                                </div>
                            </div>
                        )
                    }) :
                    <div className={styles.preloader__container}>
                        <img className={styles.preloader} src={loader} alt="loading" />
                    </div>
            }
        </div>
    )
}

export default User;
