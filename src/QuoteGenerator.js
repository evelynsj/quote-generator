import React from 'react'

import Share from './Share'

import './QuoteGenerator.css'

class QuoteGenerator extends React.Component {

    constructor() {
        super();
        this.state = {
            randomQuote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
            randomAuthor: "JK Rowling",
            quoteArray: [
                {
                    quote: "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default",
                    author: "JK Rowling"
                },
                {
                    quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
                    author: "JK Rowling"
                },
                {
                    quote: "Numbing the pain for a while will make it worse when you finally feel it.",
                    author: "JK Rowling"
                },
                {
                    quote: "It is the unknown we fear when we look upon death and darkness, nothing more.",
                    author: "JK Rowling"
                },
                {
                    quote: "Things we lose have a way of coming back to us in the end, if not always in the way we expect",
                    author: "JK Rowling"
                }
            ]  
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        event.preventDefault();

        const rand = Math.floor(Math.random() * this.state.quoteArray.length);
        const quote = this.state.quoteArray[rand].quote;
        const author = this.state.quoteArray[rand].author;
        this.setState( {
            randomQuote: quote,
            randomAuthor: author
        });
    }

    render() {
        return (
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