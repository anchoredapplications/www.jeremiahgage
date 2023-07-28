"use client"
import styles from './GitHubFooter.module.scss'
import data from '../../data';

function GitHubFooter(props) {
    return (
        <div className={styles.github}>
            <p>
                GitHub: <a target="_blank" rel="noreferrer" href={process.env.NEXT_PUBLIC_GITHUB_SITE_URL + props.path} onClick={(event) => {event.stopPropagation()}}>
                {process.env.NEXT_PUBLIC_GITHUB_SITE_URL + props.path}
                </a>
            </p>
        </div>
    );
}


export default GitHubFooter;
