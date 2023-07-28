'use client'
import Skill from './Skill';
import styles from './Skills.module.scss'

export default function Skills(props) {
    return (
        <div className={styles.skills}>
            {props.skills.map((item, index) => {
                return <Skill key={index} image={item.image} tooltip={item.tooltip} dates={item.dates} link={item.link} title={item.title} subtitle={item.subtitle}/>
            })}
        </div>
    );
}