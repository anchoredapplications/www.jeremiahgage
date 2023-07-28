"use client"
import styles from './Section.module.scss'
import FlipCard from '../../shared/components/FlipCard/FlipCard'
import GitHubFooter from './GitHubFooter/GitHubFooter';
import GitHubCodeDemo from './GitHubCodeDemo/GitHubCodeDemo';

function Section(props) {
    return (
        <div className={styles.software}>
            <FlipCard> 
                <div className={[styles.cardFace, styles.front].join(" ")}>
                    <h1 className={styles.heading}>
                        {props.heading}
                    </h1>                   
                        <div className={styles.content}>
                            {props.children}
                        </div> 
                </div>
                <div className={[styles.cardFace, styles.back].join(" ")}>
                    <h1 className={styles.heading}>
                        {props.heading}
                    </h1>        
                    <div className={styles.content}>
                        <div className={styles.wrapper}>
                            {props.description.back}
                        </div>
                        <div className={styles.wrapper}>
                            <GitHubCodeDemo path={props.demoPath}/>
                        </div>
                    </div>
                    <GitHubFooter path={props.footerPath}/>
                </div>
            </FlipCard>
        </div>
    );
}


export default Section;
