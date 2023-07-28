'use client'
import styles from './Project.module.scss'
import FlipCard from '../../../../shared/components/FlipCard/FlipCard.js'

function Project(props) {
    const inlineStyle = {    
        background: `linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),
        url(${props.image}), no-repeat`,
        backgroundPosition: "center center",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }
    
    return (
        <div className={styles.project}> 
            <FlipCard>
                <div className={styles.front} style={inlineStyle} >
                    <h2 className={styles.heading}>    
                        {props.title}
                    </h2>
                </div>
                <div className={styles.back}>
                    <h4 className={styles.summary}>    
                        {props.summary}
                    </h4>
                </div>
            </FlipCard>
        </div>
    );
}


export default Project;
