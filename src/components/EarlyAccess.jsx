import { useState } from "react";

import "./styles/EarlyAccess.css";

const EarlyAccess = () => {
  const [isValid, setIsValid] = useState(true);

  function handleValidEmail(e) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(e.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  return (
    <section className="access-section">
      <div className="access-card">
        <h1 className="access-title">Get early access today</h1>
        <p className="access-text">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="access-form">
          <input
            className="access-input"
            type="email"
            required
            maxLength={100}
            placeholder="email@example.com"
            onChange={handleValidEmail}
          ></input>
          <button className="access-btn">Get Started For Free</button>
        </form>
        {!isValid && (
          <p className="error-msg">Error, please check your email</p>
        )}
      </div>
    </section>
  );
};

export default EarlyAccess;
