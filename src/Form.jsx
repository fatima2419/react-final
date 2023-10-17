import React from 'react';

const MyForm = () => {
  return (
    <div className="contact-form-container">
      <div className="form-wrapper">
        <h1>Contact Us</h1>
        <p>Have a question or need assistance? Feel free to reach out to us.</p>
        <form
          action="https://formspree.io/f/xaygaaqk" // Replace with your Formspree email
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className="form-control" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className="form-control" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ marginTop: '2%' }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
