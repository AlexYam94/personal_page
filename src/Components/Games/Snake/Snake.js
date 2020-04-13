import React, {useEffect,useState} from 'react';
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
    const [locX,setLocX] = useState(0);
    const [locY,setLocY] = useState(0);

    useEffect(() => {
        document.addEventListener("keydown",(event)=>{props.snakeMoveHandler(event);});
    }, []);

    return(
        
        <div className={classes.Snake}>
            {/* 520: 20 steps, each 25, 20*25=500. 500+20=520 */}
            <svg className={classes.PlayArea} width="520" height="520">
                <rect x={props.snake.x} y={props.snake.y} width="20" height="20" stroke="black" strokeWidth="2" />
            </svg>
        </div>
    )

};

const DrawHead = () => {

}

// function snakeMoveHandler(event){
//     switch (event.keyCode) {
//         case 87:
//           //move up
//           this.setState((prev) => {
//             let snake = Object.assign({},prev.snake);
//             setLocY(locY-25);
//             if(snake.y<0)
//               snake.y=500;
//             return {snake: snake};
//           });
//           break;
//         case 83:
//         //move down
//           this.setState((prev) => {
//             let snake = Object.assign({},prev.snake);
//             setLocY(locY+25);
//             if(snake.y>500)
//               snake.y=0;
//             return {snake: snake};
//           });
//           break;
//         case 65:
//         //move left
//           this.setState((prev) => {
//             let snake = Object.assign({},prev.snake);
//             setLocX(locX-25);
//             if(snake.x<0)
//               snake.x=500;
//             return {snake: snake};
//           });
//           break;
//         case 68:
//         //move right
//           this.setState((prev) => {
//             let snake = Object.assign({},prev.snake);
//             setLocX(locX+25);
//             if(snake.x>500)
//               snake.x=0;
//             return {snake: snake};
//           });
//           break;
//       }
// }

export default Snake;