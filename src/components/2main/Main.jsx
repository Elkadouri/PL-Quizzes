import "./main.css";
import {
  pl,
  // test,
  htmlQuiz,
  cssQuiz,
  bootstrapQuiz,
  jsQuiz,
  reactQuiz,
  angularQuiz,
  pythonQuiz,
  djangoQuiz,
  flaskQuiz,
  phpQuiz,
  laravelQuiz,
  javaQuiz,
  springQuiz,
  csharpQuiz,
  dotnetQuiz,
  cppQuiz
} from "../4info/info";

import { useState , useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  const [startQuiz, setStartQuiz] = useState({
    display: false,
    plQuiz: "",
    plHref: "",
    plId: "",
    count: 0,
  });

  const handleStartQuiz = (quizName, plHref, plId) => {
    setStartQuiz({
      display: true,
      plQuiz: quizName,
      plHref: plHref,
      plId: plId,
      count: 0,
    });

   
  };

  const getQuizData = () => {
    switch (startQuiz.plQuiz) {
      // case "Mhaddi":
      //   return test;
      case "HTML":
        return htmlQuiz;
      case "CSS":
        return cssQuiz;
      case "Bootstrap":
        return bootstrapQuiz;
      case "JavaScript":
        return jsQuiz;
      case "React":
        return reactQuiz;
      case "Angular":
        return angularQuiz;
      case "Python":
        return pythonQuiz;
      case "Django":
        return djangoQuiz;
      case "Flask":
        return flaskQuiz;
      case "PHP":
        return phpQuiz;
      case "Laravel":
        return laravelQuiz;
      case "Java":
        return javaQuiz;
      case "Spring":
        return springQuiz;
      case "C#":
        return csharpQuiz;
      case ".NET":
        return dotnetQuiz;
      case "C++":
        return cppQuiz;
      default:
        return [];
    }
  };

  const quizData = getQuizData();
  const [answer, setAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Load the sound
  const clickSound = new Audio("./click-sound.mp3");
  clickSound.volume = 0.3;
  clickSound.playbackRate = 1.4;

  const endSound = new Audio("./end.mp3");
  endSound.volume = 0.9;
  endSound.playbackRate = 1.2;

  const nextSound = new Audio("./next-sound.mp3");
  nextSound.volume = 0.5;



  const handleNextQuestion = () => {
    nextSound.play();
    if (correctAnswer === answer) {
      setResult((prevResult) => prevResult + 1);
    }

    setTimeout(() => {
      if (startQuiz.count === quizData.length - 1) {
        setAnswer("");
        // const finalResult = result + (correctAnswer === answer ? 1 : 0);
        // console.log("Quiz completed! Final score: " + finalResult);
        setShowResult(true);
        endSound.play();
      } else {
        setStartQuiz({ ...startQuiz, count: startQuiz.count + 1 });
        setAnswer("");
        setCorrectAnswer("");
        
      }
    }, 800);
  };




  const handleOptionClick = (option) => {
    clickSound.play();
    setAnswer(option);
    setCorrectAnswer(quizData[startQuiz.count].correctAnswer);
  };




  // Function to shuffle options
  const shuffleOptions = (options) => {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
  };



  // Memoize the shuffled options to avoid reshuffling on every re-render
  const shuffledOptions = useMemo(() => {
    return quizData[startQuiz.count]
      ? shuffleOptions([...quizData[startQuiz.count].options])
      : [];
  }, [quizData, startQuiz.count]);



  const [activeBtn , setActiveBtn] = useState('All Quizzes')



  return (
    <main className="main">
      <section className="intro">
        <h2>Welcome to <span>QuizMaster</span></h2>
        <p>
          Test your knowledge with our interactive quizzes on HTML, CSS,
          JavaScript, Python, PHP, .... Challenge yourself and improve your skills!
        </p>
      </section>


      <ul className="quizes-btns">
          <li onClick={()=> setActiveBtn('All Quizzes')} className={activeBtn === 'All Quizzes' ? "active-btn" : ''}>All Quizzes</li>
          {pl.map((item) => (
            <li className={activeBtn === item.n ? "active-btn" : ''}  onClick={() => {
              setActiveBtn(item.n)
            }} key={item.n}>
               {item.n}
            </li>
          ))}
        </ul>

      <section className="quiz-categories">

        {
          pl
          .filter((item) => activeBtn === 'All Quizzes' || activeBtn === item.n)
          .map((item) => (
            <div id={item.id} key={item.n} className="quiz-card">
              <h3>{item.n} Quiz</h3>
              <p>{item.d}</p>
              <a
                onClick={() => handleStartQuiz(item.n, item.h, item.id)}
                href={startQuiz.plHref}
                className="start-btn"
              >
                Start Quiz
              </a>
            </div>
          ))
        
        }
      </section>

      {startQuiz.display && (
        <div className="quizes-container">
          {!showResult && (
            <div className="quizes">
              <h3 className="pl-name">{startQuiz.plQuiz} Quiz</h3>
              <p className="number-of-question">
                Question {startQuiz.count + 1} of {quizData.length}:
              </p>

              {quizData[startQuiz.count] && (
                <>
                  <p className="question">
                    {quizData[startQuiz.count].question}
                  </p>
                  <ul className="all-options">
                    {shuffledOptions.map((option) => (
                      <li
                        onClick={() => handleOptionClick(option)}
                        key={option}
                        className="option"
                      >
                        <span
                          className={`select-circle ${
                            answer === option ? "selected-answer" : ""
                          }`}
                        ></span>
                        <span className="select-option">{option}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <button
                className="next-btn-div"
                disabled={answer === "" ? true : false}
                onClick={handleNextQuestion}
              >
                <span className="next-btn">Next</span>
                <FontAwesomeIcon fontSize={13} icon={faChevronRight} />
              </button>

              <button
                className="close-btn"
                onClick={() => {
                  setStartQuiz({
                    display: false,
                    plQuiz: "",
                    plHref: "",
                    plId: "",
                    count: 0,
                  });
                  setResult(0);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}

          {showResult && (
            <div className="quizes result-section">
              <h2 className="result-title">Final Result</h2>
              <div className="result-body">
                <p className="result-score">
                  You scored <span>{result + (correctAnswer === answer ? 1 : 0)}</span> out of <span>{quizData.length}</span>
                </p>
                <p className="result-message">
                  {result >= quizData.length / 2
                    ? "Great job! Keep up the good work!"
                    : "Keep practicing, you'll get better!"}
                </p>
                <div className="fr-btns">
                  <button
                    className="btn"
                    onClick={() => {
                      setStartQuiz({ ...startQuiz, count: 0 });
                      setResult(0);
                      setShowResult(false);
                    }}
                  >
                    Retry
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      setStartQuiz({
                        display: false,
                        plQuiz: "",
                        plHref: "",
                        plId: "",
                        count: 0,
                      });
                      setResult(0);
                      setShowResult(false);
                    }}
                  >
                    Finish
                  </button>
                </div>
              </div>
              <button
                className="close-btn"
                onClick={() => {
                  setStartQuiz({
                    display: false,
                    plQuiz: "",
                    plHref: "",
                    plId: "",
                    count: 0,
                  });
                  setResult(0);
                  setShowResult(false);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
