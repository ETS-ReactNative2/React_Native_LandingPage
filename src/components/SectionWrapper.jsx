import React from 'react';
import styles from '../styles/Global';
import Button from './Button';
import assets from '../assets';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
    return (
        <div className={`min-h-screen ${styles.section}
        ${reverse ? styles.bgWhite : styles.bgPrimary} 
        ${styles.bgWhite} ${banner}`}>
            <div className={`flex items-center 
            ${reverse ? styles.boxReverseClass : styles.boxClass}
            ${styles.boxClass} w-11/12 sm:w-full minmd:w-3/4`}>
                <div className=
                    {`${styles.descDiv} 
                ${reverse ? 'fadeRightMini' : 'fadeLeftMini'} 
                ${reverse ? styles.textRight : styles.textLeft}
                fadeLeftMini`}>
                    <h1 className={`
                    ${reverse ? styles.blackText : styles.whiteText}
                    ${styles.h1Text}`}>{title}</h1>
                    <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>{description}</p>
                    {showBtn && (
                        <Button
                            assetUrl={assets.expo}
                            link="https://expo.dev/@imat17/NFT_platform?serviceType=classic&distribution=expo-go"
                        />
                    )}
                </div>
                <div className={`${styles.flexCenter} flex-1 p-8 sm:px-0`}>
                    <img className={`${styles.sectionImg} ${reverse ? 'fadeLeftMini' : 'fadeRightMini'}`}
                        src={mockupImg} alt="mockup" />
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper;