import React from 'react';
import styles from '../styles/custom.module.css'

function Spinner() {
    return (
        <div className={`${styles.loader}`}>
            <div className={`${styles.cell} ${styles.d0}`}></div>
            <div className={`${styles.cell} ${styles.d1}`}></div>
            <div className={`${styles.cell} ${styles.d2}`}></div>
            <div className={`${styles.cell} ${styles.d1}`}></div>
            <div className={`${styles.cell} ${styles.d2}`}></div>
            <div className={`${styles.cell} ${styles.d2}`}></div>
            <div className={`${styles.cell} ${styles.d3}`}></div>
            <div className={`${styles.cell} ${styles.d3}`}></div>
            <div className={`${styles.cell} ${styles.d4}`}></div>
        </div>
    )
}

export default Spinner;