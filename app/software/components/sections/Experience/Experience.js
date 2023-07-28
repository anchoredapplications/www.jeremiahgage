"use client"
import { useEffect, useState } from 'react';
import axios, { CancelToken } from 'axios';
import Section from '../../Section';
import ExperiencePaneList from './ExperiencePaneList';
import ExperienceDescriptionPane from './ExperienceDescriptionPane';
import styles from './Experience.module.scss'
import { DataLoadedEvent } from '../../../system';

function Experience(props) {
    const nullExperience = {
        jobTitle: null, 
        jobType: null,
        employer: null,
        displayDate: null,
        duration: null, 
        location: null,
        description: null,
        skills: []
    }
    var [selectedExperience, setSelectedExperience] = useState(nullExperience);
    
    const handleClick = (value) => {
        if (value.jobTitle !== selectedExperience.jobTitle) {
            setSelectedExperience(nullExperience);
            setTimeout(() => {
                setSelectedExperience(value);
            }, selectedExperience ? 100 : 0)
        }
    }
    
    var [experiences, setExperiences] = useState([]);
    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const load = async () => {
            try {
               let experiences = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_EXPERIENCES}`)
               setExperiences(experiences.data)
               globalThis.document.dispatchEvent(DataLoadedEvent);

            } catch (err) {
                if (axios.isCancel(err)) {
                    return console.info(err);
                }
                console.error(err);
            }
        }

        load();
        
        return () => {
          // here we cancel the previous in-flight, unfinished http request
          cancelTokenSource.cancel(
            "Cancelling previous http call because a new one was made"
          );
        };
    }, []);

    return (
        <Section
            heading="experience"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/Experience/"
            footerPath="/blob/master/src/software/components/sections/Experience/Experience.js"
            description={props.descriptions.experience}
        >
            <div className={styles.experiences}>
                <ExperiencePaneList experiences={experiences} handleClick={handleClick}/>
                <ExperienceDescriptionPane handleClose={() => {handleClick(nullExperience)}}
                    jobTitle={selectedExperience.jobTitle}
                    jobType={selectedExperience.jobType}
                    employer={selectedExperience.employer}
                    displayDate={selectedExperience.displayDate}
                    duration={selectedExperience.duration} 
                    location={selectedExperience.location}
                    description={selectedExperience.description}
                    skills={selectedExperience.skills}
                />
            </div>
        </Section>
    );
}

export default Experience;
