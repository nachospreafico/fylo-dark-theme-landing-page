import "./styles/HowItWorks.css";

import StayProductive from "./../assets/images/illustration-stay-productive.png";
import Arrow from "./../assets/images/icon-arrow.svg";

const HowItWorks = () => {
  return (
    <section className="how-section">
      <img
        src={StayProductive}
        className="how-img"
        alt="stay productive image"
      ></img>
      <div className="how-card">
        <h3 className="how-title">Stay productive, wherever you are</h3>
        <p className="how-text">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="how-text">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="how-link-container">
          <p className="how-link-text">See how Fylo works</p>
          <img src={Arrow} className="how-arrow" alt="arrow for link"></img>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
