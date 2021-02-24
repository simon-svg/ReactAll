import React from 'react';

// css
import styles from './aside.module.css';

// components
import AsidePanel from './asidePanel';

function Aside() {
    return(
        <aside className={styles.aside}>
            <AsidePanel />
        </aside>
    )
}

export default Aside;