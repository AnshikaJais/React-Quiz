import React from 'react';

const FinishScore = ({points, maxPossiblePoints, highscore}) => {
    const per = (points / maxPossiblePoints) * 100;
    return (
        <>
            <p className="result">
               You scored <strong>{points}</strong> out of {maxPossiblePoints}
                &nbsp; ({Math.ceil(per)}%)
            </p>
            <p className="highscore">HighScore: {highscore} points</p>
        </>
    );
};

export default FinishScore;