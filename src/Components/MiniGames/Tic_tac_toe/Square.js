import React, { Component } from 'react';
import './Containers.css';

// class Square extends Component {

//     render() {
//         return (
//             <button className="square"
//                 onClick={() => {this.props.onClick()}}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

// export default Square;

const square = (props) => {
    return (
        <button className="square"
            onClick={() => {props.onClick()}}>
            {props.value}
        </button>
    );
}

export default square;