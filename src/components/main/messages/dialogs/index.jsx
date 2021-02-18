import React from 'react';
import { NavLink } from 'react-router-dom';

// css
import styles from './dialogs.module.css';

// constants
import dialogs from '../../../../constants/dialogs';


const Dialog = ({ name, id }) => {
    return (
        <div className={styles.dialog}>
            <NavLink className={styles.dialog__link} activeClassName={styles.dialog__link_active} to={`/message/${id}`}>{name}</NavLink>
        </div>
    )
}

function Dialogs() {
    return (
        <div className={styles.dialogs}>
            {
                dialogs.map((item) => {
                    return <Dialog key={item.id} name={item.name} id={item.id} />
                })
            }
        </div>
    )
}

export default Dialogs;