import React, { useEffect, useState } from "react";
import "./TestPage.css";
import { useLocation, Link } from "react-router-dom";
import axios from 'axios';
import { motion as m } from 'framer-motion';
import ClipLoader from "react-spinners/ClipLoader";

const TestPage = () => {
  const location = useLocation();
  const { state: { generatedQuiz } = {} } = location || {};
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState('');
  const [gradingResult, setGradingResult] = useState(null);
  const [submittedLastQuestion, setSubmittedLastQuestion] = useState(false);
  const [loading, setLoading] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  const questions = generatedQuiz ? generatedQuiz.trim().split(/\d+\.\s+/).filter(Boolean) : [];
  const totalQuestions = questions.length;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleInputChange = (e) => {
    setUserAnswers(e.target.value);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswers('');
      setGradingResult(null);
    }
  };

  const handleSubmitAnswers = async (e) => {
    e.preventDefault();
    console.log("User Answers:", userAnswers);
    try {
      const response = await axios.post('https://back-end-server.glitch.me/gradeAnswers/', {
        answers: userAnswers,
        questions: questions[currentQuestionIndex]
      });
        
      setGradingResult(response.data.gradingResult);
      if (currentQuestionIndex === totalQuestions - 1) {
        setSubmittedLastQuestion(true);
      }
      setAnswerSubmitted(true);
    } catch (error) {
      console.error('Error submitting answers:', error);
    }
  };

  const handleFinishTest = () => {
    // Actions to perform before navigating, if needed
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <div className="test-page">
        <p className="question-number"> {currentQuestionIndex + 1} of {totalQuestions}</p>

        {generatedQuiz ? (
          <div>
            {loading ? (
              <ClipLoader 
                size={150}
                color={"#063661"}
                loading={loading}
              />
            ) : (
              <form id="test" onSubmit={handleSubmitAnswers}>
                <p className="question-number2">Question</p>
                <p className="question">{questions[currentQuestionIndex]}</p>
                <p className="question-number2">Your Answer</p>
                <label>Answer</label>
                <input
                  type="text"
                  name="answer"
                  value={userAnswers}
                  onChange={handleInputChange}
                />
                
                <div>
                  <button type="submit">Submit</button>
                  {submittedLastQuestion && (
                    <Link to="/results">
                      <button type="button" onClick={handleFinishTest}>Finish Test</button>
                    </Link>
                  )}
                </div>
              </form>
            )}
          </div>
        ) : (
          <p>No quiz generated.</p>
        )}

        {gradingResult && 
          <div className="Grading">
            <h3 id="grad">Evaluation</h3>
          
            <p id="graded-result2" className="graded-result">{gradingResult}</p>
          </div>
        }

        {answerSubmitted && currentQuestionIndex < totalQuestions - 1 && (
          <button id="next" type="button" onClick={handleNextQuestion} className="left-button">
          Next
          </button>
        )}
      </div>
    </m.div>
  );
};

export default TestPage;