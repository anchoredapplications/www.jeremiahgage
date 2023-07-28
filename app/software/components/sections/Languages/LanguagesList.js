"use client"
import styles from './LanguagesList.module.scss'
import CircleMeter from "../../../../shared/components/CircleMeter/CircleMeter"
import { useEffect, useState } from 'react';
import axios, { CancelToken } from 'axios';
import { DataLoadedEvent } from '../../../system';

export default function LanguagesList(props) {
    var [languages, setLanguages] = useState([]);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();
    
        const load = async () => {
            try {
                let languages = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_LANGUAGES}`)
                setLanguages(languages.data.value)
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
            "Cancelling previous http call because a new one was made"
          );
        };
    }, []);

    return (
        <div className={styles.list}>                 
            {languages.map((item, idx) => {
                const sum = languages.reduce((accumulator, object) => {
                    return accumulator + object.value;
                }, 0);
                return <div key={idx} className={styles.circleMeter__wrapper}>
                    <CircleMeter  value={(item.value)/sum} name={item.name}/>
                </div>
            })}
        </div>
    );
}