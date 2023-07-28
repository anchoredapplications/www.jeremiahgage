'use client'
import { useState } from 'react';
import styles from './CircleMeter.module.scss'
import CircleMeterSVG from './CircleMeterSvg';

function CircleMeter(props) {
    var [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 700px)").matches)

    window.addEventListener('resize', () => {
        setIsMobile(window.matchMedia("(max-width: 700px)").matches);
    }, true);

    return (
        <div className={styles.circleMeter}>
            <div className={styles.skill}>
                <div className={styles.outer}>
                    <div className={styles.inner}>
                        <div className={styles.content}>
                            {props.name}
                            <br/>
                            <div className={styles.number}>
                                {Math.round(props.value*1000)/10}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CircleMeterSVG className={styles.svg} cx={isMobile ? "60" : "80"} cy={isMobile ? "60" : "80"} r="70" fill="none" stroke="url(#GradientColor)" strokeWidth="20px" strokeDasharray={440} strokeDashoffset={440 - 440*props.value}/>
        </div>

    );
}


export default CircleMeter;
