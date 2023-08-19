import "./styles/Comments.css";

import Profile1 from "./../assets/images/profile-1.jpg";
import Profile2 from "./../assets/images/profile-2.jpg";
import Profile3 from "./../assets/images/profile-3.jpg";

const Comments = () => {
  return (
    <section className="comments-section">
      <div className="comment-card">
        <p className="comment-text">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="user-container">
          <img src={Profile1} className="user-img"></img>
          <div className="user">
            <p className="user-name">Satish Patel</p>
            <p className="user-job">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className="comment-card">
        <p className="comment-text">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="user-container">
          <img src={Profile2} className="user-img"></img>
          <div className="user">
            <p className="user-name">Bruce McKenzie</p>
            <p className="user-job">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className="comment-card">
        <p className="comment-text">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="user-container">
          <img src={Profile3} className="user-img"></img>
          <div className="user">
            <p className="user-name">Iva Boyd</p>
            <p className="user-job">Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
