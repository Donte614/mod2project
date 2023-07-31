
import "./App.css";
import Share from "./components/share.js";
import React, { useState, useEffect } from "react";
function getRandomVerse(verses) {
  return verses[Math.floor(Math.random() * verses.length)];
}
function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetch("https://bible-api.com/romans+1:1-16:25")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json.verses || []);
      });
  }, []);
  function getNewVerse() {
    setQuote(getRandomVerse(quotes));
  }
  return (
    <div className="App">
      <h1>God's Word</h1>
      <section>
        <button onClick={getNewVerse}>New Verse</button>
        <Share></Share>
        <div>
       
    </div>
        {quote && (
          <div>
            <h3>
              <span>“</span>
              {quote.text}
            </h3>
            <i>
              - {quote.book_name} {quote.chapter}:{quote.verse}
            </i>
          </div>
        )}
      </section>
    </div>
  );
}
export default App;





































