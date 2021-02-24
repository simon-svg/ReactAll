import React from 'react';
import lightContext from '../../../../contexts/lightContext';

// css
import styles from './asideBtn.module.css';


function AsideBtn() {
    return (
        <lightContext.Consumer>
            {
                ({lightIcon, handleLightChange}) => {
                    return (
                        <div className={styles.aside__btn_container}>
                            <button className={styles.aside__btn} onClick={handleLightChange}>
                                <i className={lightIcon}></i>
                            </button>
                        </div>
                    )
                }
            }
        </lightContext.Consumer>
    )
}

export default AsideBtn;