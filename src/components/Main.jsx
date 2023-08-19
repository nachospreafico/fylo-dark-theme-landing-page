import Illustration1 from "./../assets/images/illustration-intro.png";

import "./styles/Main.css";

const Main = () => {
  return (
    <main>
      <img
        src={Illustration1}
        className="illustration-intro"
        alt="illustration for main section"
      ></img>
      <p className="intro-title">
        All your files in one secure location, accessible anywhere.
      </p>
      <p className="intro-text">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button className="intro-btn">Get Started</button>
    </main>
  );
};

export default Main;
