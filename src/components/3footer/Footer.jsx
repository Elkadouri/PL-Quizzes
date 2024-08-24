import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

import { pl } from "../4info/info";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          {pl.map((item) => {
            return (
              <a key={item.n} href={item.h}>
                {item.n}
              </a>
            );
          })}
        </nav>

        <div className="social-media">
          <a
            href="https://x.com/Mr_ElKadouri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.linkedin.com/in/mostapha-elkadouri-718207320"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Elkadouri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <p className="mostafa">
          Designed and Developed by <span>Elkadouri</span>
        </p>
        <p>
          &copy; {new Date().getFullYear()} <span>QuizMaster</span>. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
