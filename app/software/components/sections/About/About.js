"use client"
import Section from '../../Section';
import styles from './About.module.scss';

export default function About(props) {
    return (
        <Section 
            heading="about"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/About/"
            footerPath="/blob/master/src/software/components/sections/About/About.js"
            description={props.descriptions.about}
        >
            <div className={styles.about}>
                <div>
                    {props.descriptions.about.front}
                </div>
            </div>
        </Section>
    );
}