import React from 'react';

// css
import styles from './asidePanel.module.css';

// components
import AsideBtn from './asideBtn';


function AsidePanel() {
    return(
        <div className={styles.aside__panel}>
            <AsideBtn />
        </div>
    )
}

export default AsidePanel;