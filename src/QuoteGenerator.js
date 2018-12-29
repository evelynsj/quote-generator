import React from 'react'

import Share from './Share'

import './QuoteGenerator.css'

class QuoteGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            randomQuote: "",
            randomAuthor: "",
            isLoading: true,
            quoteArray: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then(response => response.json()).then(data => {
            const {quotes} = data;
            this.setState({
                isLoading: false,
                quoteArray: quotes});
            this.getRandomQuote();
        });
    }

    getRandomQuote() {
        const rand = Math.floor(Math.random() * this.state.quoteArray.length);
        const quote = this.state.quoteArray[rand].quote;
        const author = this.state.quoteArray[rand].author;
        this.setState( {
            randomQuote: quote,
            randomAuthor: author
        });
    }

    handleClick(event) {
        event.preventDefault();
        this.getRandomQuote();
    }

    render() {
        return (
            (this.state.isLoading) ? null : 
            <div className="quote-generator">
                <div className="quote-wrapper">
                    <p className="quote-text">{this.state.randomQuote}</p>
                    <p className="quote-author">{this.state.randomAuthor}</p>
                </div>
                <div className="btn-share">
                    <button className="generate-btn" onClick={this.handleClick}>Generate!</button>
                    <Share />
                </div>
                
            </div>
        );
    }
}

export default QuoteGenerator