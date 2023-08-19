import "./styles/EarlyAccess.css";

const EarlyAccess = () => {
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
          ></input>
          <button className="access-btn">Get Started For Free</button>
        </form>
      </div>
    </section>
  );
};

export default EarlyAccess;
