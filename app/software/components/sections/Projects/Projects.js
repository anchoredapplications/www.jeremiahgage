'use client'
import ProjectsList from './ProjectsList';
import Section from '../../Section';
import styles from './Project.module.scss';

function Projects(props) {
    return (
        <Section
            heading="projects"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/Projects/"
            footerPath="/blob/master/src/software/components/sections/Projects/Projects.js"
            description={props.descriptions.skills}
        >
            <div className={styles.projects}>
                <ProjectsList/>
            </div>
        </Section>
    );
}


export default Projects;
