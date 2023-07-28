"use client"
import styles from './SinglePageNav.module.scss'
 
function SinglePageNav(props) {
    if (window) window.addEventListener('resize', () => {
        alignFrontAndBackOfCards();
    }, true);
    if (document) document.addEventListener("data-loaded", function(e) {
        alignFrontAndBackOfCards();
    });
      
    return (
        <>
            <div className={styles.mainContent}>
            {props.children.map((item, index)=>{
                return <section key={index} id={item.props.header}>
                    {item}                    
                </section>
            })}
            </div>
            <div className={styles.footerWrapper}>
                {props.footer}
            </div>
        </>
    );
}

function alignFrontAndBackOfCards() {
    var sections = (document) ? document.querySelectorAll("section") : [];
    const sectionArr = []
    sections.forEach(section => {
        section.setAttribute("style", ``)
        sectionArr.push(section)
    })
    sectionArr.shift();
    sections.forEach(section => {
        let heights = []
        section.querySelectorAll("*").forEach(descandant => {
            heights.push(descandant.offsetHeight? Number(descandant.offsetHeight) : 0)
        })
        heights.push(section.offsetHeight? Number(section.offsetHeight) : 0)
        const maxHeight = Math.max( ...heights );
        section.setAttribute("style", `height: ${maxHeight}px;`)
    })
}

export default SinglePageNav;
