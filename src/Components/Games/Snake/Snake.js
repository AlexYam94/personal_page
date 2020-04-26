import React, { useEffect, useState, useRef } from 'react';
import classes from './Snake.module.css';

const Snake = (props) => {
    /*TODO:
        draw snake
        draw food
        handle key input
        snake head toward key direction
        snake body move to last location of head
        snake tail move to last location of body
        handle snake touch edge
        handle snake eat food
        handle snake eat itself
    
        keyCode:
        w:87
        a:65
        s:83
        d:68
    
    */
   //useReducer is better for this situation?
   //head and body should be at the same obj
    const [locX, setLocX] = useState(50);
    const [locY, setLocY] = useState(0);
    const xRef = useRef(50);
    const yRef = useRef(0);

    const [body, setBody] = useState([{x:25,y:0},{x:0,y:0}]);
    const bodyRef = useRef([{x:25,y:0},{x:0,y:0}]);

    console.log("body:");
    console.log(body);
    console.log("bodyRef");
    console.log(bodyRef);

    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            snakeHeadMoveHandler(event);
        });
    }, []);

    const setRefVal = (ref, value) => {
        ref.current = value;
    }

    const snakeBodyMoveHandler = (move) => {
        let newBody={};
        switch (move) {
            case "up":
            case "down":
            case "left":
                bodyRef.forEach(loc => {
                    console.log(loc);
                });
            case "right":
            default:
        }
    }

    const snakeHeadMoveHandler = event => {
        let newBody={};
        switch (event.keyCode) {
            case 87:
                //move up

                newBody = [{x:xRef.current, y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];
                setBody(newBody);
                bodyRef.current = [{x:xRef.current,y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];

                setLocY((prevState) => prevState - 25);
                yRef.current -= 25;
                if (yRef.current < 0){
                    setRefVal(yRef,500);
                    setLocY(500);
                }
                break;
            case 83:
                //move down
                newBody = [{x:xRef.current, y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];
                setBody(newBody);
                bodyRef.current = [{x:xRef.current,y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];

                setLocY(prevState => prevState + 25);
                yRef.current += 25;
                if (yRef.current > 500){
                    setRefVal(yRef,0);
                    setLocY(0);
                }
                break;
            case 65:
                //move left
                newBody = [{x:xRef.current, y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];
                setBody(newBody);
                bodyRef.current = [{x:xRef.current,y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];

                setLocX(prevState => prevState - 25);
                xRef.current -= 25;
                if (xRef.current < 0){
                    setRefVal(xRef,500);
                    setLocX(500);
                }
                break;
            case 68:
                //move right
                newBody = [{x:xRef.current, y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];
                setBody(newBody);
                bodyRef.current = [{x:xRef.current,y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];

                setLocX(prevState => prevState + 25);
                xRef.current += 25;
                if (xRef.current > 500){
                    setRefVal(xRef,0);
                    setLocX(0);
                }
                break;
        }
        console.log("xRef: " + xRef.current);
        console.log("yRef: " + yRef.current);
    }

    // let snakeBody = bodyRef.map((loc,index) => {
    //     return <rect x={loc.x} y={loc.y} key={index} width="20" height="20" stroke="black" strokeWidth="2" />
    // });



    return (

        <div className={classes.Snake}>
            {/* 520: 20 steps, each 25, 20*25=500. 500+20=520 */}
            <svg className={classes.PlayArea} width="520" height="520">
                <rect x={locX} y={locY} width="20" height="20" stroke="black" strokeWidth="2" />
                <rect x={body[0].x} y={body[0].y} width="20" height="20" stroke="black" strokeWidth="2" />
                <rect x={body[1].x} y={body[1].y} width="20" height="20" stroke="black" strokeWidth="2" />
            </svg>
            {/* <button onClick={() => {
                console.log("locX: " + locX);
                console.log("locY: " + locY);
                setLocX(locX + 1);
                setLocY(locY + 2);
                console.log("locX: " + locX);
                console.log("locY: " + locY);
            }}>test</button> */}
        </div>
    )

};

const DrawHead = () => {

}

export default Snake;