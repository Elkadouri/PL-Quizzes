import "./header.css";
// import { pl } from "../4info/info";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>QuizMaster</h1>
      </div>
      {/* <nav className="navigation">
        <ul>
          {pl.map((item) => {
            return (
              <li key={item.n}>
                <a href={item.h}>{item.n}</a>
              </li>
            );
          })}
        </ul>
      </nav> */}
      <div className="cta-button">
        <a href="#start-quiz" className="start-quiz-btn">
          Start Quiz
        </a>
      </div>
    </header>
  );
}
