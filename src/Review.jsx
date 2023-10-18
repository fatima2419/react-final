import React, { useState, useEffect } from "react";
import "./App.css";
import { blue } from "@mui/material/colors";

export default function Review() {
  const [userName, setUserName] = useState(''); // Step 1
  const [userReview, setUserReview] = useState(''); // Step 1
  const [quotes, setQuotes] = useState([ // Use useState to manage the quotes array
    {
      text: "االفندق يموت ",
      author: "Maria Smantha, Web Developer",
    },
    {
      text: "احسنن خدمة ",
      author: "Lisa Cudrow, Graphic Designer",
    },
    {
      text: "ياريت بلاش.",
      author: "John Smith, Marketing Specialist",
    },
  ]);

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const nextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextQuote, 5000); // Change the quote every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserReviewChange = (e) => {
    setUserReview(e.target.value);
  };

  const handleUserReviewSubmit = () => {
    if (userName.trim() !== '' && userReview.trim() !== '') {
      // Add the user's review to the quotes array
      const newUserReview = {
        text: userReview,
        author: userName, // Use the user's input as the author
      };

      // Create a new quotes array with the user's review added
      const newQuotes = [newUserReview, ...quotes];

      // Update the state with the new quotes array
      setQuotes(newQuotes);

      // Clear the user's input fields
      setUserName('');
      setUserReview('');
    }
  };

  return (
    <div className="quote-slider" style={{textAlign:'right', marginTop:'3%',color:' rgba(35, 135, 192)'}}>
      <div className="quote-container" style={{ transform: `translateX(-${currentQuoteIndex * 100}%)` }}>
        {quotes.map((quote, index) => (
          <div key={index} className="quote">
            <p>{quote.text}</p>
            <p className="author">{quote.author}</p>
          </div>
        ))}
      </div>
      <div>
        {/* Review Input Form */}
        <input
          type="text"
          placeholder="الاسم"
          value={userName}
          onChange={handleUserNameChange}
        />
        <textarea
          rows="4"
          cols="50"
          placeholder="أكتب تقييمك هنا..."
          value={userReview}
          onChange={handleUserReviewChange}
        />
        <button onClick={handleUserReviewSubmit}>إرسال تقييمك</button>
      </div>
    </div>
  );
}
