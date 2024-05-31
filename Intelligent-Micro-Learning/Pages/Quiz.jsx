import React, { useState } from "react";
import axios from "axios";
import 'tailwindcss/tailwind.css';

function Quiz() {
  const [quizData, setQuizData] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleStartQuiz = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate-quiz');
      setQuizData(response.data);
      setCurrentQuestionIndex(0);
      setSelectedOption(null);
      setScore(0);
      setShowScore(false);
    } catch (error) {
      console.error("Error generating quiz:", error);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      if (selectedOption === quizData[currentQuestionIndex]["Correct-Answer"]) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowScore(true);
      }
    } else {
      alert("Please select an option.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button 
        onClick={handleStartQuiz} 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Start Quiz
      </button>
      {quizData && !showScore && (
        <div className="quiz-question p-4 border rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">{quizData[currentQuestionIndex].Question}</h2>
          <ul className="list-none">
            {quizData[currentQuestionIndex].Choices.map((choice, index) => (
              <li 
                key={index} 
                className={`p-2 mb-2 border rounded cursor-pointer bg-amber-700 text-black ${selectedOption === choice ? 'bg-blue-200' : 'bg-gray-100'}`}
                onClick={() => handleOptionSelect(choice)}
              >
                {choice}
              </li>
            ))}
          </ul>
          <button 
            onClick={handleNextQuestion} 
            className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Next Question
          </button>
        </div>
      )}
      {showScore && (
        <div className="quiz-score text-center p-4 border rounded shadow-md">
          <h2 className="text-2xl font-bold">Your Score: {score} / {quizData.length}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
