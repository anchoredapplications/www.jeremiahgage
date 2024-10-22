const descriptions = {
    skills: {
        front: "Here are the technical skills I&#39;ve developed over my career.",
        back: (
            <>
                The Skills section dynamically pulls data from GitHub&#39;s public API, utilizing the `fetch` API and `useEffect` for data retrieval. 
                Each skill is displayed using a responsive grid layout built with CSS Grid and styled-components for seamless integration into the overall design. 
                This ensures that my skill set is always current, reflecting the latest technologies and frameworks I employ in my projects.
            </>
        )
    },
    projects: {
        front: "Explore a selection of projects I&#39;ve built, showcasing my expertise in software development.",
        back: (
            <>
                The Projects section interacts with GitHub&#39;s API to fetch detailed repository information using Axios for HTTP requests. 
                The data is managed with React&#39;s state management hooks, including `useState` and `useReducer`, allowing for complex state logic while maintaining performance. 
                Each project entry includes descriptions, tech stacks, and links to live demos and source code, providing a comprehensive overview of my work and the methodologies applied.
            </>
        )
    },
    about: {
        front: (
            <>
                <p>
                    Some would say a good software developer writes good code. I would posit that good code writes itself. 
                    Through the minimization of redundancy by commitment to 
                    &nbsp;<a href={process.env.NEXT_PUBLIC_WIKIPEDIA_SOLID_URL} target="_blank" rel="noreferrer" onClick={(e) => {e.stopPropagation()}}>SOLID</a>&nbsp;
                    principles, and the reuse of code through component libraries, the development required by developers tends to zero. A good developer, then, can hardly be characterized
                    as a developer at all, rather, a thinker, a creator, an engineer. 
                </p>
                <br/>
                <p>
                    This portfolio is a small example of good code. Do you want to take a closer look? Click anywhere in this pane to begin. 
                </p>
            </>
        ),
        back: (
            <>
                <p>
                    This is a glimpse of how this pane works. This is a static page, so nothing too fancy. Using a custom React.js/JSX component, this file needs only be 13 lines long.
                </p>
                <p>
                    For more information, check out the GitHub. 
                </p>
            </>
        )
    },
    experience: {
        front: "Discover my professional journey in software engineering and the roles I&#39;ve held.",
        back: (
            <>
                The Experience section draws from a personal API to highlight key positions and projects throughout my career. 
                It utilizes `axios` for data fetching and React&#39;s context API for state management, allowing for a scalable architecture. 
                Each role includes detailed descriptions of the tech stacks I worked with, methodologies employed, and specific contributions to projects, showcasing my ability to adapt and excel in various environments.
            </>
        )
    },
    academia: {
        front: "Learn about my educational background and the knowledge I&#39;ve acquired.",
        back: (
            <>
                The Academia section utilizes a personal API to provide a detailed overview of my academic achievements. 
                It includes information on coursework, projects, and research conducted during my studies, formatted using React components for clarity and responsiveness. 
                This technical integration demonstrates how foundational knowledge translates into practical application in real-world scenarios.
            </>
        )
    },
    contact: {
        front: "I&#39;m always open to new opportunities and collaborations. Let&#39;s connect!",
        back: (
            <>
                The Contact section employs AWS Email Service for streamlined communication. 
                The form is built with controlled components in React, ensuring that user input is validated in real-time before submission. 
                This not only enhances user experience but also ensures efficient handling of messages. 
                Each contact inquiry is routed to my email, enabling quick and effective communication, and fostering valuable connections in the tech community.
            </>
        )
    }
}

const data = { descriptions };
export default data;
