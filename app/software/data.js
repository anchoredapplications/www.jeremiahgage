const descriptions = {
    skills: {
        front: "Here are some of the skills I have accumulated over the years.",
        back: "The Skills component leverages GitHub's public api to render the data."
    },
    projects: {
        front: "Here are some of the projects I have completed over the years",
        back: "This is how it works."
    },
    about: {
        front: <>
                    <p>
                        Some would say a good software developer writes good code. I would posit that good code writes itself. 
                        Through the minimazation of redundancy by commitment to 
                        &nbsp;<a href={process.env.NEXT_PUBLIC_WIKIPEDIA_SOLID_URL} target="_blank" rel="noreferrer" onClick={(e) => {e.stopPropagation()}}>SOLID</a>&nbsp;
                        priciples, and the reuse of code through component libraries, the development required by developers tends to zero. A good developer, then, can hardly be characterized
                        as a developer at all, rather, a thinker, a creator, an engineer. 
                    </p>
                    <br/>
                    <p>
                        This portfolio is a small example of good code. Do you want to take a closer look? Click anywhere in this pane to begin. 
                    </p>
                </>,
        back: <>
                <p>
                    This is a glimpse of how this pane works. This is a static page, so nothing too fancy. Using a custom React.js/JSX component, this file needs only be 13 lines long.
                </p>
                <p>
                For more information, check out the GitHub. 
                </p>
            </>
    },
    experience: {
        front: "",
        back: ""
    },
    academia: {
        front: "",
        back: ""
    },
    contact: {
        front: "",
        back: ""
    }
}
const data = {descriptions}
export default data;