import styles from './Modal.module.scss'
import { Close } from '../../../imgs/SVGs'
function Modal(props) {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <div className={styles.closeBtn} onClick={props.control}>
                    <Close/>
                </div>
                {props.children}
            </div>
        </div>
    );
}


export default Modal;
