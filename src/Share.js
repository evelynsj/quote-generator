import React from 'react'
import './Share.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTumblrSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Share extends React.Component {

    getMailQuery(quote, author) {
        const subject = "Quote for You!"
        const text = '"' + quote + '" - ' + author;
        const query = "mailto:?subject=" + subject + "&body=" + text;
        
        return query;
    }

    getTumblrURL(quote, author) {
        const canonicalUrl = "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button";
        const query = "posttype=quote&caption=" + author + "&content=" + quote + canonicalUrl;
        const url = "https://www.tumblr.com/widgets/share/tool?" + query;

        return url;

    }

    getTwitterURL(quote, author) {
        const content =  '"' + quote + '" - ' + author;
        const url = "https://twitter.com/intent/tweet?text=" + content;

        return url;
    }

    render () {
        const quote = encodeURIComponent(this.props.quote);
        const author = encodeURIComponent(this.props.author);
        const twitterURL = this.getTwitterURL(quote, author);
        const tumblrURL = this.getTumblrURL(quote, author);
        const mailAttr = this.getMailQuery(quote, author);        
        return (
            <div className="icons">
                <a href={tumblrURL} target="_blank"><FontAwesomeIcon icon={faTumblrSquare} size="lg"/></a>
                <a href={twitterURL} target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
                <a href={mailAttr}><FontAwesomeIcon icon={faEnvelope} size="lg"/></a>
            </div>
        ); 
    }
}

export default Share