"use client"

import styles from './Skills.module.scss'

export default function Skill(props) {
    const openLink = (e) => {
        e.stopPropagation(); 
        if (props.link) window.open(props.link)
    }
    return (
        <div className={styles.skill} title={props.link ?? props.tooltip ?? props.subtitle} onClick={openLink}>
            <div className={styles.content} >
            {
                props.children ?? <>                
                    {/* This renders an SVG from a string. This is safe in our use case, because the strings are strictly controlled.*/}
                    <div dangerouslySetInnerHTML={{ __html: props.image }} /> 
                </>
            }
            </div>
            <div title={props.tooltip}>            
                <h3>{props.title}</h3>
                <div>{props.subtitle}</div>
                <h5>{props.dates}</h5>
            </div>     
        </div>
    );
}