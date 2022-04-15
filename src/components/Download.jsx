import React from 'react';
import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
    return (
        <div className={`${styles.section} ${styles.bgWhite}`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.blackText}`}>Télécharger le code source</h1>
                    <p className={`${styles.pText} ${styles.blackText}`}>Le code source est disponible sur GitHub</p>
                </div>
                <a className={styles.btnPrimary} href='https://github.com/imat17/NFT_platform' target='_blank' rel='noreferrer'>
                    Code Source
                </a>
                <div className={styles.flexCenter}>
                    <img className={styles.fullImg} src={assets.scene} alt="download" />
                </div>
            </div>
        </div>
    );
};

export default Download;