'use client'
import ExperiencePane from './ExperiencePane';
import styles from "./Experience.module.scss"

function ExperiencePaneList(props) {
    return (
        <div className={styles.experiencePaneList}>
            {
                props.experiences.map((experience, i) => {
                    return experience.positions.map((position, j) => {
                        return <ExperiencePane handleClick={props.handleClick}
                            key={`${i}_${j}`} 
                            employer={experience.employer}
                            title={position.title} 
                            jobType={position.jobType} 
                            startDate={position.startDate}
                            endDate={position.endDate}
                            location={position.location}
                            description={position.description}
                            skills={position.skills}
                        />
                    });
                })
            }
        </div>
    )
}

export default ExperiencePaneList;