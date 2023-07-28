"use client"
import SinglePageNav from './components/SinglePageNav/SinglePageNav'
import Landing from './components/sections/Landing/Landing';
import About from './components/sections/About/About';
import Languages from './components/sections/Languages/Languages';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';

import LocalData from './data';
import Academia from './components/sections/Academia/Academia';
import Footer from './components/sections/Footer/Footer';
import Contact from './components/sections/Contact/Contact';

function App() {
    const data = {...LocalData};
    return (
        <SinglePageNav footer={<Footer/>}>
            <Landing header="Home"/>
            <About header="About" descriptions={data.descriptions}/>
            <Academia header="Academia" descriptions={data.descriptions}/>
            <Experience header="Experience" descriptions={data.descriptions}/>
            <Projects header="Proj." descriptions={data.descriptions}/>
            <Languages header="Lang." descriptions={data.descriptions}/>
            <Contact header="Contact" descriptions={data.descriptions}/>
        </SinglePageNav>
    );
}

export default App;
