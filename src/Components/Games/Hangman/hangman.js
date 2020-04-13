import React, {useEffect} from "react";
import classes from "./Hangman.module.css";

/*TODO:
    better alignment
    try another word logic
*/


const Hangman = (props) => {
    useEffect(() => {
        console.log("useEffect");
        props.resetHangmangHandler();
    },[]);

    return (
        <div>
            {props.hangmanCorrectCounter > 0 ?
                <div>
                <DrawHangman counter={props.counter} word={props.word} hangmanHandler={props.hangmanHandler} resetHangmangHandler={props.resetHangmangHandler}/>
                <button onClick={props.resetHangmangHandler}>Try other word</button>
                </div>
                :
                <div>
                <p>You Win</p>
                <NewGame resetHangmangHandler={props.resetHangmangHandler}/>
                </div>
            }
        </div>
    );
};

const DrawHangman = (props) => {
    let answerBoxes = props.word.split("").map((char, index) => {
        return <input maxLength="1" key={index}
        onChange={(event, key) => { 
            if(!/^[a-z]$/.test(event.target.value)){
                event.target.value="";
                return;
            }
            props.hangmanHandler(event, index); 
        }}></input>
    });

    return(
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
                    {props.counter < 0 ? <div><p>You Dead. The answer is: "{props.word}"</p><NewGame resetHangmangHandler={props.resetHangmangHandler}/></div> : answerBoxes}
                </div>
    )
};

const NewGame = (props) => {
    return <button onClick={props.resetHangmangHandler}>New Game</button>
};

const DrawGallowBase = () => {
    return (
        <line x1="100" y1="480" x2="500" y2="480" stroke="black" strokeWidth="2" />
    );
};

const DrawGallowPost = () => {
    return (
        <line x1="200" y1="80" x2="200" y2="480" stroke="black" strokeWidth="2" />
    );
};

const DrawGallowTop = () => {
    return (
        <line x1="200" y1="80" x2="450" y2="80" stroke="black" strokeWidth="2" />
    );
};

const DrawGallowRope = () => {
    return (
        <line x1="320" y1="80" x2="320" y2="190" stroke="black" strokeWidth="2" />
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

export default Hangman;