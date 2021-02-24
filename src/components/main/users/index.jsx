import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as axios from 'axios';

// css
import styles from './users.module.css';

// components
import User from './user';
import UserPage from './userPage';

function Users() {
    let [usersData, setUsersData] = useState([]);

    let [curentPage] = useState(1);
    let [pageSize] = useState(10);
    let [userId, setUserId] = useState(0);

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${curentPage}&count=${pageSize}`).then((response) => {
            if (!usersData.length) {
                setUsersData(response.data.items);
            }
        })
    })


    return (
        <BrowserRouter>
            <div className={styles.users}>
                <Route exact path={`/users`} render={
                    () => <User usersData={usersData} setUserId={setUserId} />} />
                <Route path={`/users/profile/`} render={
                    () => <UserPage userId={userId} />} />
            </div>
        </BrowserRouter>
    )
}


export default Users;