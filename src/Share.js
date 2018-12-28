import React from 'react'
import './Share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'



class Share extends React.Component {
    render () {
        return (
            <div className="icons">
                <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
                <a href="#"><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
            </div>
        ); 
    }
}

export default Share