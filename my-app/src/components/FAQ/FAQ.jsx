import React, { useState } from 'react';
import './faq.css';
import Question from './question';
import image1 from './images/faq-img.png';
import image2 from './images/faq-img2.png';
import image3 from './images/faq-img3.png';
const FAQ = () => {
    const questions = [ 
        {
            question: 'How can you join us?',
            answer: 'You can register via the link that opens at the beginning of the school year and benefit from the best events and exciting lessons.',
        },
        {
            question: 'What benefits do members get?',
            answer: 'They can benefit by giving and presenting lessons to people interested in these workshops. They can also attend events dedicated to members only, organized by the FTC Club managers, and build relationships that will benefit them in their future careers.',
        },
        {
            question: 'Can non-members attend events?',
            answer: 'Yes, they can benefit from the FTC club, as it does not require being a member to participate. Members, however, are part of the club structure, helping the leaders and benefiting from them as well.',
        },
        {
            question: 'How do I contact support?',
            answer: 'You can contact the club if you need anything at any time through its accounts, which you will find on the club website.',
        },
    ];
    

    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <div id="FAQ" className="FAQ">
            <div className="title">FAQ</div>
            <div className="subtitle">Got Questions?</div>
            <div className="content flex">
                <div className="questions">
                    {questions.map((q, index) => (
                        <Question
                            key={index}
                            number={index + 1}
                            question={q.question}
                            answer={q.answer}
                            isOpen={openQuestionIndex === index}
                            onClick={() => toggleQuestion(index)}
                        />
                    ))}
                </div>
                <div className="images flex">
                    <div className="image"><img src={image2} alt="faq-image" /></div>
                    <div className="image"><img src={image1} alt="faq-image" /></div>
                    <div className="image"><img src={image3} alt="faq-image" /></div>
                </div>
            </div>
            
        </div>
    );
};

export default FAQ;
