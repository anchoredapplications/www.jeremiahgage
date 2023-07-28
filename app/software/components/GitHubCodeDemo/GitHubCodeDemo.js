"use client"
import { useEffect, useState } from 'react'
import { Octokit } from "octokit";
import axios, { CancelToken } from "axios";
import styles from './GitHubCodeDemo.module.scss'
import TabGroup from '../TabGroup/TabGroup';
import { DataLoadedEvent } from "../../system";

function GitHubCodeDemo(props) {
    const [documents, setDocuments] = useState([]);

    var isActive = false;
    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const load = async () => {
            try {
               let documents = await axios.post(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_DOCUMENTS}`, { path: props.path})
               setDocuments(documents.data.value)
               document.dispatchEvent(DataLoadedEvent);
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
            "Cancelling previous http call because a new one was made ;-)"
          );
        };
    }, []);
    
    return (
        <div className={styles.gitHubCodeDemo}>
                <div 
                    className={styles.tabGroup__wrapper}
                    onClick={(event) => {event.stopPropagation()}}            
                    >
                    <TabGroup>
                        {documents.map((el, idx) => {
                            return (<div key={idx} title={el.title} stylesLinks={styles.links}
                                className={[styles.tab, isActive ? styles.active : ""].join(" ")}>            
                                <textarea 
                                    readOnly 
                                    value={""}
                                    onClick={(event) => {event.stopPropagation()}}            
                                ></textarea>
                            </div>)
                        })}
                    </TabGroup>
            </div> 
        </div>
    );
}


export default GitHubCodeDemo;
