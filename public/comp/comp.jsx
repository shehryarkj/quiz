import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Comp1(){

let a=0
    
    const quizData = [
      {
        question: 'What is the result of 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'let', 'const', 'variable'],
        correctAnswer: 'var'
      },
      {
        question: 'What is the purpose of the `typeof` operator in JavaScript?',
        options: ['To check if a variable is defined', 'To find the type of a variable', 'To concatenate strings', 'To declare a variable'],
        correctAnswer: 'To find the type of a variable'
      },
      {
        question: 'What does the acronym "DOM" stand for in web development?',
        options: ['Document Object Model', 'Data Object Model', 'Dynamic Object Management', 'Document Oriented Model'],
        correctAnswer: 'Document Object Model'
      },
      {
        question: 'Which of the following is not a valid JavaScript data type?',
        options: ['string', 'boolean', 'array', 'tuple'],
        correctAnswer: 'tuple'
      },
      {
        question: 'What is the purpose of the `addEventListener` method in JavaScript?',
        options: ['To remove an event listener', 'To add a new HTML element', 'To attach an event handler function to an element', 'To change the CSS style of an element'],
        correctAnswer: 'To attach an event handler function to an element'
      }
    ];
    
      // State to manage current question index and user score
      function start(){
        window.location.reload(false);
      }

        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [result,setResult]=useState('')
        
        // Function to handle user's answer selection
      const handleAnswerClick = (selectedOption) => {
        // Check if the selected option is correct
        if (selectedOption === quizData[currentQuestion].correctAnswer) {
          setScore(score + 1);
     
        }
        
        // Move to the next question
 
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          // Quiz is complete
          // alert(`Quiz complete! Your score is ${score} out of ${quizData.length}`);
          setResult(`Quiz complete! Your score is ${score} out of ${quizData.length}`)
        
       
        }
     
      };
      
      
      return(
        <>
       <div id="qz">
        <h1>Quiz </h1>
        <div>
          <Link to='/quiz'>
            <button>ADD Question</button>
          </Link>
          <button onClick={start}>Start quiz</button>
          <Link to={'/allquiz'}>
            <button>Show Quizzes</button>
          </Link>
        </div>
        {result ? (
          <div>
            <h1>{result}</h1>
            <p>Score: {score}</p>
          </div>
        ) : (
          <div>
            <p>Question {currentQuestion + 1}: {quizData[currentQuestion].question}</p>
            <ul>
              {quizData[currentQuestion].options.map((option, index) => (
                <li key={index} onClick={() => handleAnswerClick(option)}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
)

}
export default Comp1;