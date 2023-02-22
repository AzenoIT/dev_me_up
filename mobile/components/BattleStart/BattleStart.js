import Question from "../Question/Question";
import {useRef, useState} from "react";
import BattleSummary from "../BattleSummary/BattleSummary";


function BattleStart() {

    return (
        <>
            {!isOver ? (
                <Question
                    score={score}
                    count={count}
                    setIsOver={setIsOver}
                />
            ) : (
                <BattleSummary
                score={score}
                count={count}
                setIsOver={setIsOver}
                />
            )}
        </>
    );
}

export default BattleStart;
