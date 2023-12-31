import React from 'react';

const FinishScore = ({points, maxPossiblePoints, highscore, dispatch}) => {
    const per = (points / maxPossiblePoints) * 100;
    return (
        <>
            <p className="result">
               You scored <strong>{points}</strong> out of {maxPossiblePoints}
                &nbsp; ({Math.ceil(per)}%)
            </p>
            <p className="highscore">HighScore: {highscore} points</p>
            <button className="btn btn-ui" onClick={() => dispatch({type: "restart"}) }>Restart</button>
        </>
    );
};

export default FinishScore;