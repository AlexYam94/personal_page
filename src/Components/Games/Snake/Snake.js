import React, { useEffect, useState, useRef } from 'react';
import classes from './Snake.module.css';

const Snake = (props) => {
    /*TODO:
        draw food
        handle snake eat food
        handle snake eat itself
    
        keyCode:
        w:87
        a:65
        s:83
        d:68
    
    */
    //useReducer is better for this situation?
    //head and body should be at the same obj?
    const [locX, setLocX] = useState(50);
    const [locY, setLocY] = useState(0);
    const xRef = useRef(50);
    const yRef = useRef(0);

    const currentDirRef = useRef(68);

    const [body, setBody] = useState([{ x: 25, y: 0 }, { x: 0, y: 0 }]);
    const bodyRef = useRef([{ x: 25, y: 0 }, { x: 0, y: 0 }]);

    const [food, setFood] = useState({ x: 250, y: 250 });
    const foodRef = useRef({ x: 250, y: 250 });

    const tickerRef = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown",snakeHeadMoveHandler);
        tickerRef.current = setInterval(snakeMoveTicker, 100);
    }, []);

    const snakeMoveTicker = () => {
        if (checkBodyLoc(xRef.current, yRef.current, true))
            snakeHeadMoveHandler({ keyCode: currentDirRef.current });
        else
            document.removeEventListener("keydown", snakeHeadMoveHandler);
    };

    const setRefVal = (ref, value) => {
        ref.current = value;
    }

    const snakeBodyMoveHandler = () => {
        let newBody = [];
        let i;
        newBody.push({ x: xRef.current, y: yRef.current });
        for (i = 0; i < bodyRef.current.length - 1; i++) {
            newBody.push(bodyRef.current[i]);
        }
        bodyRef.current = newBody;
        setBody(newBody);
    }

    const checkBodyLoc = (x, y, checkDead) => {
        let i = 0;
        if (!checkDead && x == xRef.current && y == yRef.current)
            return false;
        for (; i < bodyRef.current.length; i++) {
            if (x == bodyRef.current[i].x && y == bodyRef.current[i].y)
                return false;
        }
        return true;
    }

    const foodLocGen = () => {
        let x = (Math.floor(Math.random() * 20) + 1) * 25;
        let y = (Math.floor(Math.random() * 20) + 1) * 25;
        while (true) {
            if (checkBodyLoc(x, y, false))
                break;
            x = (Math.floor(Math.random() * 20) + 1) * 25;
            y = (Math.floor(Math.random() * 20) + 1) * 25;
        }
        return { x: x, y: y };
    }

    const snakeFoodHandler = (keyCode) => {
        //snake head next loc in the loc of food?
        //add new body to current head loc
        //head loc = food loc
        let newBody = bodyRef.current;
        switch (keyCode) {
            case 87:
                if (yRef.current - 25 == foodRef.current.y && xRef.current == foodRef.current.x) {
                    newBody = bodyRef.current;
                    newBody.unshift({ x: xRef.current, y: yRef.current });
                    bodyRef.current = newBody;
                    setBody(newBody);
                    yRef.current = foodRef.current.y;
                    setLocY((prevState) => prevState - 25);
                    foodRef.current = foodLocGen()
                    setFood(foodRef.current);
                    return true;
                }
                break;
            case 83:
                if (yRef.current + 25 == foodRef.current.y && xRef.current == foodRef.current.x) {
                    newBody = bodyRef.current;
                    newBody.unshift({ x: xRef.current, y: yRef.current });
                    bodyRef.current = newBody;
                    setBody(newBody);
                    yRef.current = foodRef.current.y;
                    setLocY((prevState) => prevState + 25);
                    foodRef.current = foodLocGen()
                    setFood(foodRef.current);
                    return true;
                }
                break;
            case 65:
                if (xRef.current - 25 == foodRef.current.x && yRef.current == foodRef.current.y) {
                    newBody = bodyRef.current;
                    newBody.unshift({ x: xRef.current, y: yRef.current });
                    bodyRef.current = newBody;
                    setBody(newBody);
                    xRef.current = foodRef.current.x;
                    setLocX((prevState) => prevState - 25);
                    foodRef.current = foodLocGen()
                    setFood(foodRef.current);
                    return true;
                }
                break;
            case 68:
                if (xRef.current + 25 == foodRef.current.x && yRef.current == foodRef.current.y) {
                    newBody = bodyRef.current;
                    newBody.unshift({ x: xRef.current, y: yRef.current });
                    bodyRef.current = newBody;
                    setBody(newBody);
                    xRef.current = foodRef.current.x;
                    setLocX((prevState) => prevState + 25);
                    foodRef.current = foodLocGen()
                    setFood(foodRef.current);
                    return true;
                }
                break;
        }
        return false;
    }

    const snakeHeadMoveHandler = event => {
        let newBody = [];
        if ([87, 83, 65, 68].includes(event.keyCode) && Math.abs(currentDirRef.current - event.keyCode) != 4 && Math.abs(currentDirRef.current - event.keyCode) != 3)
            currentDirRef.current = event.keyCode;
        switch (event.keyCode) {
            case 87:
                //move up
                if (bodyRef.current[0].x == xRef.current && bodyRef.current[0].y == yRef.current - 25) {
                    break;
                }
                // setBody(newBody);
                // bodyRef.current = [{x:xRef.current,y:yRef.current},{x:bodyRef.current[0].x,y:bodyRef.current[0].y}];
                if (!snakeFoodHandler(event.keyCode)) {
                    snakeBodyMoveHandler();
                    setLocY((prevState) => prevState - 25);
                    yRef.current -= 25;
                    if (yRef.current < 0) {
                        setRefVal(yRef, 500);
                        setLocY(500);
                    }
                }
                break;
            case 83:
                //move down
                if (bodyRef.current[0].x == xRef.current && bodyRef.current[0].y == yRef.current + 25) {
                    break;
                }

                if (!snakeFoodHandler(event.keyCode)) {
                    snakeBodyMoveHandler();
                    setLocY(prevState => prevState + 25);
                    yRef.current += 25;
                    if (yRef.current > 500) {
                        setRefVal(yRef, 0);
                        setLocY(0);
                    }
                }
                break;
            case 65:
                //move left
                if (bodyRef.current[0].x == xRef.current - 25 && bodyRef.current[0].y == yRef.current) {
                    break;
                }
                if (!snakeFoodHandler(event.keyCode)) {
                    snakeBodyMoveHandler();
                    setLocX(prevState => prevState - 25);
                    xRef.current -= 25;
                    if (xRef.current < 0) {
                        setRefVal(xRef, 500);
                        setLocX(500);
                    }
                }
                break;
            case 68:
                //move right
                if (bodyRef.current[0].x == xRef.current + 25 && bodyRef.current[0].y == yRef.current) {
                    break;
                }
                if (!snakeFoodHandler(event.keyCode)) {
                    snakeBodyMoveHandler();

                    setLocX(prevState => prevState + 25);
                    xRef.current += 25;
                    if (xRef.current > 500) {
                        setRefVal(xRef, 0);
                        setLocX(0);
                    }
                }
                break;
        }
        // console.log("xRef: " + xRef.current);
        // console.log("yRef: " + yRef.currents);
    }

    let snakeBody = body.map((loc, index) => {
        return <rect x={loc.x} y={loc.y} key={index} width="20" height="20" stroke="black" strokeWidth="2" />
    });
    return (
        <div className={classes.Snake}>
            {/* 520: 20 steps, each 25, 20*25=500. 500+20=520 */}
            <svg className={classes.PlayArea} width="520" height="520">
                {snakeBody}
                <rect x={food.x} y={food.y} width="20" height="20" stroke="red" stroke-width="3" fill="red" />
                <rect x={locX} y={locY} width="20" height="20" stroke="black" fill="white" strokeWidth="2" />
            </svg>
        </div>
    )
};

const DrawHead = () => {

}

export default Snake;