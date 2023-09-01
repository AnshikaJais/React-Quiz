import React from 'react';

const Options = ({question, dispatch, answer}) => {
    const hasAnswered = answer !== null;
    console.log({answer, hasAnswered});
    return (
        <div className="options">
            {question.options.map((item, index) => {
                return (
                    <button
                        className={`btn btn-option ${index === answer ? "answer" : ""} ${hasAnswered ? index === question.correctOption ? "correct": "wrong" : ""}`}
                        key={index}
                        onClick={()=> dispatch({type: "newAnswer", payload: index})}
                        disabled={hasAnswered}
                    >{item}</button>
                )
            })}
        </div>
    );
};

export default Options;