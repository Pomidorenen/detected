import React from 'react';
import styles from '../styles/module/background.module.scss';
const Background = ({img,children}) => {
    return (
        <div
            style={{
                    background: `url(${img})`,
                    backgroundSize:'100% 100%'
                }}
            className={styles.background}
        >
            {children}
        </div>
    );
};

export default Background;