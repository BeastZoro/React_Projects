import React, { useEffect, useState } from "react";

const quoteUrl = "https://dummyjson.com/quotes";

const Quotes = ({randomColor, colorChange}) => {
  const [quote, setQuote] = useState("Life is what happens to you while you’re busy making other plans.");
  const [author, setAuthor] = useState("Stephen Covey");
  const [quoteArray, setQuoteArray] = useState(null);


  const fetchQuote = async (url) => {
    const response = await fetch(url);
    const parsedData = await response.json();
    setQuoteArray(parsedData.quotes);
  };

  useEffect(() => {
    fetchQuote(quoteUrl);
  }, []);

  const handleRandomQuote = () => {
    const randomInteger = Math.floor(Math.random() * quoteArray.length)
    setQuote(quoteArray[randomInteger].quote)
    setAuthor(quoteArray[randomInteger].author)

    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    colorChange(color)
  };
  return (
    <>
      <main id="quote-box" style={{color : randomColor}}>
        <p id="text">{quote}</p>
        <p id="author"> - {author}</p>
        <div className="actions">
          <a id="tweet-quote" href={encodeURI(`https://www.twitter.com/intent/tweet?text=${quote} ${author}`)}>Tweet</a>
          <button id="new-quote" onClick={handleRandomQuote} style={{backgroundColor :randomColor}}>New Quote</button>
        </div>
      </main>
    </>
  );
};

export default Quotes;
