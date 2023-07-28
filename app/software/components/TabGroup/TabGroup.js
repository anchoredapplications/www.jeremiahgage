import styles from './TabGroup.module.scss'
import { useEffect, useState } from 'react'

function TabGroup(props) {
    const [selectedID, setSelectedID] = useState(0)
    const tabLinks = []
    const tabs = []
    
    props.children.map(
        (child, index) => {
            tabLinks.push(<button key={index} className={[styles.tabLink, index === selectedID ? styles.active : ""].join(" ")} onClick={() => {setSelectedID(index)}}>{child.props.title}</button>)
            tabs.push(<div key={index} className={[styles.tab, index === selectedID ? styles.active : ""].join(" ")}>{child.props.children}</div>)
        }
    )

    return (        
        <div className={styles.tabGroup}>    
            <div className={styles.links}>    
                {tabLinks}
            </div> 
            <div className={styles.tabs}>    
                {tabs}
            </div> 
        </div> 
    );
}


export default TabGroup;
