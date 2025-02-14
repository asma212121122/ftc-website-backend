import React from 'react';
import './faq.css';

const Question = ({ number, question, answer, isOpen, onClick }) => {
    return (
        <div className="question-box">
            <div className="question" onClick={onClick}>
                <p>
                    <span className="number">0{number} </span>
                    {question}
                </p>
                <span className="icon">{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="answer">{answer}</div>}
        </div>
    );
};

export default Question;
