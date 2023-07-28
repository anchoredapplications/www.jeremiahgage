"use client"
import LanguagesList from './LanguagesList';
import Section from '../../Section';
import styles from './LanguagesList.module.scss'

function Languages(props) {
    return (
        <Section
            heading="languages"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/software/components/sections/Languages/"
            footerPath="/blob/master/src/software/components/sections/Languages/Languages.js"
            description={props.descriptions.skills}
        >
            <div className={styles.languages}>
                <LanguagesList/>
            </div>
        </Section>
    );
}


export default Languages;
