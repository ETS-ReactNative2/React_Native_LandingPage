import React from 'react';
import styles from '../styles/Global';

const Button = ( { assetUrl, link }) => {
    return (
        <div className={styles.btnBlack} onClick={() => window.open(link, "_blank")}>
            <img className={styles.btnIcon} src={assetUrl} alt="Expo icon" />
            <div className='flex flex-col justify-start ml-4'>
                <p className={`${styles.btnText} text-xs`}>Testez l'application sur</p>
                <p className={`${styles.btnText} text-sm`}>Expo Store</p>
            </div>
        </div>
    );
};

export default Button;