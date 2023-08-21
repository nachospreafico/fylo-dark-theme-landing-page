import "./App.css";
import Features from "./components/Features";
import Header from "./components/Header";
import Main from "./components/Main";
import HowItWorks from "./components/HowItWorks";
import Comments from "./components/Comments";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
      <Features />
      <HowItWorks />
      <Comments />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
