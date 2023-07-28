"use client"
import Skills from "../Skills/Skills"
import styles from './Academia.module.scss'

function AcademiaDescriptionPane(props) {
    return (
        <div className={styles.academiaDescriptionPane}>
            <h2>{props.degree}</h2>
            {props.majors.map((major, idx) => {
                return <h4 key={idx}>{major}</h4>
            })}

            {/* This renders an SVG from a string. This is safe in our use case, because the strings are strictly controlled.*/}
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: props.description }} />

            <div className={styles.skillsSpacer}/>
            <Skills skills={props.skills}/>
        </div>
    )
}

export default AcademiaDescriptionPane;