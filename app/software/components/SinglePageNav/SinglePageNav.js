'use client'
import styles from './SinglePageNav.module.scss'
 
function SinglePageNav(props) {
    // window.addEventListener("scroll", navHighlighter);
    // const [dropDownIsActive, setDropDownIsActive] = useState(false)
    globalThis.window.addEventListener('resize', () => {
        alignFrontAndBackOfCards();
    }, true);
    globalThis.document.addEventListener("data-loaded", function(e) {
        alignFrontAndBackOfCards();
    });
      
    return (
        <>
            {/* <div className={styles.sideBar}>
                <nav className={["navigation", styles.navigation, (dropDownIsActive ? styles.isOpen : "")].join(" ")} tabIndex={1}  onClick={() => {setDropDownIsActive(val => !val)}}>
                    <div className={styles.dropdownButton}>    
                        <svg viewBox="0 0 100 80" width="20" height="30">
                            <rect y="15" width="100" height="15"></rect>
                            <rect y="45" width="100" height="15"></rect>
                            <rect y="75" width="100" height="15"></rect>
                        </svg>
                    </div>
                    <ul className={styles.dropdownContent}>
                        {props.children.map((item, index)=>{
                            return <li key={index}>
                                <a href={`#${item.props.header}`}>{item.props.header}</a>
                            </li>
                        })}
                    </ul>
                </nav>
            </div> */}
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

function navHighlighter() {
    const sections = globalThis.document.querySelectorAll("section[id]");
    let scrollY = globalThis.window.pageYOffset;
  
    sections.forEach(current => {
        const sectionHeight = current.parentElement.offsetHeight;
    
        const sectionTop = current.getBoundingClientRect().top + globalThis.window.pageYOffset - 150;
        var sectionId = current.getAttribute("id");
        
        var el = globalThis.document.querySelector(".navigation a[href*=" + sectionId + "]")
        if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + sectionHeight
        ){
            el.className = styles.active
        } else {
            el.className = ""
        }
    });
}

function alignFrontAndBackOfCards() {
    var sections = globalThis.document.querySelectorAll("section");
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
