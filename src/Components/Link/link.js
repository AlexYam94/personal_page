import React from 'react';
import classes from "./link.module.css";

class link extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <a href='https://github.com/alexyam94/mini-projects' target="_blank">
                    mini projects
                </a>
                <br/>
                <a href='https://leetcode.com/yamminghin/'>Leetcode</a>
            </div>
        )
    };
}

export default link;