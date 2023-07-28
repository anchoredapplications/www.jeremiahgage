"use client"
import { Close } from "../../../../images/SVGs";
import Skills from "../Skills/Skills"
import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    const close = (event) => {
        event.stopPropagation()
        props.handleClose()
    }
    return (
        <div className={[styles.experienceDescriptionPane, props.jobTitle ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            {props.jobTitle ?       
                <>
                    <div className={styles.closeButton} onClick={close}><Close/></div>
                    <div>
                        <h2>{props.jobTitle}</h2>
                        <h4>{props.employer} - {props.duration}</h4>

                        {/* This renders an SVG from a string. This is safe in our use case, because the strings are strictly controlled.*/}
                        <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />

                    </div>

                    {props.skills.length > 0 ? 
                        <div>
                            <h3>Technologies:</h3>
                            <br/>
                            <Skills skills={props.skills}/>
                        </div>
                        : null
                    }
                </>      
            : null
            }    

        </div>
    )
}

export default ExperienceDescriptionPane;