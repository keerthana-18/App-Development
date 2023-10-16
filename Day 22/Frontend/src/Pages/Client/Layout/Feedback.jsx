
import React, { useState } from 'react';
import '../../../Assets/css/Feedback.css'
const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data to a server or store it locally
    console.log('Feedback submitted:', { name, email, feedback });
    // You can implement the data submission logic here
  };

  return (
    <div className="feedback-form-container">
    <div className="feedback-form">
      <h2>Customer Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
       
        <label>
          Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
       
        <label>
          Feedback:
          </label>
          <textarea
            rows="4"
            cols="50"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default Feedback;
