import styles from './Collapse.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    function collapseFunc() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.collapseContainer}>
            <div className={styles.collapseTitleContainer}>
                <h2 className={styles.collapseTitle}>{title}</h2>
                <span className={styles.collapseIcon} onClick={collapseFunc}>{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </div>
            { isOpen ?
            <div className={styles.collapseDescriptionContainer}>
                <p  className={styles.collapseDescription}>{description}</p>
            </div> : ''}

        </div>
    )
}

export default Collapse