import React, { useState } from 'react';
import quotes from './quotes';
import './App.css';

const App = () => {
    const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

    const getNewQuote = () => {
        setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    };

    return (
        <div className="container">
	    <h1 id="heading" align="center">Quotes Generator</h1>
	    <div className="quote-box">
                <p className="quote">"{quote.text}"</p>
                <p className="author">- {quote.author}</p>
                <button onClick={getNewQuote} className="new-quote-btn">New Quote</button>
            </div>
        </div>
    );
};

export default App;
