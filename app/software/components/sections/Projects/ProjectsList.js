'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Project from './Project';
import { useEffect, useState } from 'react';
import axios, { CancelToken } from 'axios';
import { DataLoadedEvent } from "../../../system";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 2500 },
        items: 5
    },
    largeDesktop: {
        breakpoint: { max: 2500, min: 2000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 2000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 700, min: 0 },
        items: 1
    }
};

function ProjectsList(props) {
    var [projects, setProjects] = useState([]);

    useEffect(() => {
        const cancelTokenSource = CancelToken.source();

        const load = async () => {
            try {
                let projects = await axios.get(`${process.env.NEXT_PUBLIC_LOCAL_API_HOSTNAME}${process.env.NEXT_PUBLIC_LOCAL_API_PROJECTS}`).catch()
                setProjects(projects.data.value)
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
        <div onClick={(event) => {event.stopPropagation()}}>                
            <Carousel infinite={true} responsive={responsive}>
                {projects.map((project, idx) => {
                    return <Project key={idx} title={project.title} image={project.image} summary={project.summary}/>
                })}
            </Carousel>
        </div>
    );
}

export default ProjectsList;
