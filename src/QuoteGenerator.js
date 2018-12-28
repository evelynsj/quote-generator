import React from 'react'

import Share from './Share'

import './QuoteGenerator.css'

class QuoteGenerator extends React.Component {
    render() {
        return (
            <div className="quote-generator">
                <div className="quote-wrapper">
                    <p className="quote-text">This is a quote</p>
                    <p className="quote-author">Anonymous</p>
                </div>
                <div className="btn-share">
                    <button className="generate-btn">Generate!</button>
                    <Share />
                </div>
                
            </div>
        );
    }
}

export default QuoteGenerator