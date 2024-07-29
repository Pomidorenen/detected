import React from 'react';
import styles from "../styles/module/ghost.module.scss";
const Ghost = ({position = [0,0],img,onClick}) => {
    return (
        <div style={{
            width:"200px",
            height:"200px",
            top:position[1],
            left:position[0],
            background:`url(${img})`,
            backgroundSize:"cover"
        }}
             onClick={onClick}
             className={styles.ghost}>

        </div>
    );
};

export default Ghost;