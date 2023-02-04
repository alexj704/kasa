import './Collapse.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Collapse({title, description}) {
    const [isOpen, setIsOpen] = useState(false)

    function collapseFunc() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapseContainer">
            <div className="collapseTitleContainer">
                <h2 className="collapseTitle">{title}</h2>
                <span className='collapseIcon' onClick={collapseFunc}>{isOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}</span>
            </div>
            { isOpen ?
            <div className="collapseDescriptionContainer">
                <p  className="collapseDescription">{description}</p>
            </div> : ''}

        </div>
    )
}

export default Collapse