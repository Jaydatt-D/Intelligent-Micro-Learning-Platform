import React, { useState } from "react";
import axios from "axios";

function Quiz() {
  const [quizData, setQuizData] = useState(null);
    
  const handleStartQuiz = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate-quiz');
      setQuizData(response.data);
    } catch (error) {
      console.error("Error generating quiz:", error);
    }
  };

  return (
    <div>
      <button onClick={handleStartQuiz}>Start Quiz</button>
      {quizData && (
        <div>
          {quizData.map((question, index) => (
            <div key={index}>
              <p>{question.Question}</p>
              <ul>
                <li>{question["Option-1"]}</li>
                <li>{question["Option-2"]}</li>
                <li>{question["Option-3"]}</li>
                <li>{question["Option-4"]}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
