import React from 'react';
import assets from '../assets';
import styles from '../styles/Global';


const FeaturesCard = ( { iconUrl, iconText }) => (
    <div className={styles.featureCard}>
        <img className={styles.featureImg} src={iconUrl} alt="icon url" />
        <p className={styles.featureText}>{iconText}</p>
    </div>
)

const Features = () => {
    return (
        <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
            <div className={`${styles.subSection} flex-col text-center`}>
                <div>
                    <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
                    <p className={`${styles.pText} ${styles.whiteText}`}>
                        ProNef est crée avec une technologie multi-plateforme : React-Native.
                    </p>
                </div>
                <div className={styles.flexWrap}>
                    <FeaturesCard iconUrl={assets.react} iconText='React Native'/>
                    <FeaturesCard iconUrl={assets.javascript} iconText='Javascript'/>
                </div>
            </div>
        </div>
    );
};

export default Features;