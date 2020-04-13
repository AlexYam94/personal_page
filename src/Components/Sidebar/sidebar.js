import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = props => {
    let sidebarClasses = [classes.sidebar];
    if(props.show){
        sidebarClasses = [classes.sidebar, classes.open];
    }
    return (
    <nav className={sidebarClasses.join(' ')}>
        <ul>
            <li><a href="/">mini projects</a></li>
            <li><a href="/">github</a></li>
            <li><a href="javascript:;" onClick={() => {props.sidebarClickHandler('game')}}>mini games</a></li>
            <li><a href="/">projects</a></li>
        </ul>
    </nav>);
};

export default sidebar;