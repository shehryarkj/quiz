import React from "react";



function All(){
    const QuizData = [
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
      
    return(
        <div >
        <h1>All Quiz Questions</h1>
        {QuizData.map((questionData, index) => (
          <div key={index}>
            <p>Question {index + 1}: {questionData.question}</p>
            <ul>
              {questionData.options.map((option, optionIndex) => (
                <li key={optionIndex} 
                style={{ backgroundColor: option === questionData.correctAnswer ? 'green' : 'transparent', border:0,color:"black"} }
              >{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {questionData.correctAnswer}</p>
          </div>
        ))}
      </div>
    )
}
export default All;