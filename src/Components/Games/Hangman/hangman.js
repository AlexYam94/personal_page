import React from "react";
import classes from "./hangman.module.css";

//props.word
//e.g. popo
//_ _ _ _
//enter p
//p _ _ _

const hangman = (props) => {
    let answerBoxes = props.word.split("").map((char, index) => {
        return <input maxLength="1" onChange={(event, key) => { props.hangmanHandler(event, index); }}></input>
    });
    console.log(answerBoxes);
    return (
        <div>
            <svg width="500" height="550">
                {props.counter < 9 ? <DrawGallowBase /> : null}
                {props.counter < 8 ? <DrawGallowPost /> : null}
                {props.counter < 7 ? <DrawGallowTop /> : null}
                {props.counter < 6 ? <DrawGallowRope /> : null}
                {props.counter < 5 ? <DrawHead /> : null}
                {props.counter < 4 ? <DrawBody /> : null}
                {props.counter < 3 ? <DrawLeftHand /> : null}
                {props.counter < 2 ? <DrawRightHand /> : null}
                {props.counter < 1 ? <DrawLeftLeg /> : null}
                {props.counter < 0 ? <DrawRightLeg /> : null}
            </svg>
            {answerBoxes}
        </div>
    );
};

const DrawGallowBase = () => {
    return (
        <line x1="100" y1="480" x2="500" y2="480" stroke="black" strokerWidth="2" />
    );
};

const DrawGallowPost = () => {
    return (
        <line x1="200" y1="80" x2="200" y2="480" stroke="black" strokerWidth="2" />
    );
};

const DrawGallowTop = () => {
    return (
        <line x1="200" y1="80" x2="450" y2="80" stroke="black" strokerWidth="2" />
    );
};

const DrawGallowRope = () => {
    return (
        <line x1="320" y1="80" x2="320" y2="190" stroke="black" strokerWidth="2" />
    );
}

const DrawHead = () => {
    return (
        <circle cx="320" cy="190" r="30" fill="black" />
    );
};

const DrawBody = () => {
    return (
        <line x1="320" y1="190" x2="320" y2="360" stroke="black" fill="none" strokeWidth="3" />
    );
};

const DrawLeftHand = () => {
    return (
        <line x1="320" y1="220" x2="300" y2="320" stroke="black" fill="none" strokeWidth="2" />
    );
};

const DrawRightHand = () => {
    return (
        <line x1="320" y1="220" x2="340" y2="320" stroke="black" fill="none" strokeWidth="2" />
    );
};

const DrawLeftLeg = () => {
    return (
        <line x1="320" y1="360" x2="340" y2="460" stroke="black" fill="none" strokeWidth="2" />
    );
};

const DrawRightLeg = () => {
    return (
        <line x1="320" y1="360" x2="300" y2="460" stroke="black" fill="none" strokeWidth="2" />
    );
};

export default hangman;