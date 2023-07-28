'use client'
import styles from './Academia.module.scss'
import ImagePane from '../../../../images/ImagePane';

function AcademiaImagePane(props) {
    return (
        <div className={styles.imagePane} >
            <div className={styles.imageWrapper}>
                <ImagePane image={props.image.src}/>
            </div>
            <h2>{props.institution}</h2>
            <h4>({props.location})</h4>
        </div>
    );
}

export default AcademiaImagePane;
