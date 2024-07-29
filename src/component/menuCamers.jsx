import React from 'react';
import styles from "../styles/module/menuCamers.module.scss";
const MenuCamers = ({counts,value,setValue}) => {
    return (
        <div className={styles.menu}>
            {
                new Array(counts).fill(0).map((el,i)=>{
                    return <button key = {i}
                                   className={`${styles.btn} ${(value===i)?styles.active:""}`}
                                   onClick={()=>setValue(i)}>
                        {i+1} cam</button>
                })
            }
        </div>
    );
};

export default MenuCamers;