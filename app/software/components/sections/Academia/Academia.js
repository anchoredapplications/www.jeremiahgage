'use client'
import Section from '../../Section';
import AcademiaDescriptionPane from './AcademiaDescriptionPane';
import AcademiaImagePane from './AcademiaImagePane';
import styles from './Academia.module.scss'
import image from '../../../../images/cofo.jpg'
import { useEffect, useState } from 'react';
import axios, { CancelToken } from 'axios';

function Academia(props) {
    const nullAcademia = {
        degree: null,
        majors: [],
        school: null,
        startDate: null,
        endDate: null,
        location: null,
        description: null,
        skills: []
    }
    var [academia, setAcademia] = useState(nullAcademia);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const load = async () => {
            try {
               let academia = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_ACADEMIA}`)
               setAcademia(academia.data)
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
            heading="academia"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/Academia/"
            footerPath="/blob/master/src/software/components/sections/Academia/Academia.js"
            description={props.descriptions.experience}
        >
            <div className={styles.academia}>
                <AcademiaDescriptionPane 
                    degree={academia.degree}
                    majors={academia.majors}
                    school={academia.institution}
                    startDate={academia.startDate}
                    endDate={academia.endDate}
                    location={academia.location}
                    description={academia.description}
                    skills={academia.skills}
                />
                <AcademiaImagePane image={image} institution={academia.institution} location={academia.location}/>
            </div>
        </Section>
    );
}

export default Academia;
