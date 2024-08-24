import Header from "./components/1header/Header";
import Main from "./components/2main/Main";
import Footer from "./components/3footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="content">
      <Header />
      <Main />
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`scroll-up ${showButton ? 'show' : 'hide'}`}
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </button>
    </div>
  );
}

export default App;
