import styles from './StarMeter.module.scss'
import {StarMeter as StarMeterSVG} from '../../../imgs/SVGs'

function StarMeter(props) {
    return (
        <div className={styles.starMeter}>
            <div className={styles.fill} style={{width: `${props.value}%`}}></div>
            <div className={styles.overlay__wrapper}>
                <div className={styles.overlay}>
                    <StarMeterSVG color="#FFFFFF"/>
                </div>    
            </div>    
        </div>
    );
}


export default StarMeter;
