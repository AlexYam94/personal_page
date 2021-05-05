import React from 'react';
import winnie from '../../winnie.JPG'
import classes from './Toolbar.module.css';
import SidebarToggleButton from '../Sidebar/SidebarToggleButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Games from '../Games/Tic_tac_toe/Game';

const toolbar = props => (
    <header className={classes.toolbar}>
        <nav className={classes.toolbar_navigation}>
            <Router>
            <div><SidebarToggleButton click={props.sidebarClickHandler}/></div>
            <div className={classes.toolbar_logo}>
                <a href="/">
                    <img src={winnie} />
                </a>
            </div>
            <div className={classes.spacer}></div>
            <div className={classes.toolbar_navigation_items}>
                <ul>
                        <li className={classes.button}><a href="javascript:;"onClick={() => {props.toolbarClickHandler('main')}}>main</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </li>
                    {/* <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('game')}}>mini games</a></li> */}
                    <li className={classes.button}><a href="javascript:;" onClick={() => {props.toolbarClickHandler('unity_games')}}>unity games</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </li>
                    <li className={classes.button}><a href="javascript:;" onClick={() => {props.toolbarClickHandler('tic_tac_toe')}}>tic tac toe</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </li>
                    <li className={classes.button}><a href="javascript:;" onClick={() => {props.toolbarClickHandler('hangman')}}>hangman</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg></li>
                    <li className={classes.button}><a href="javascript:;" onClick={() => {props.toolbarClickHandler('snake')}}>snake</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg></li>
                    <li className={classes.button}><a href="javascript:;" onClick={() => {props.toolbarClickHandler('todo')}}>todo list</a>
                            <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg></li>
                </ul>
            </div>
            </Router>
        </nav>
    </header>
);

export default toolbar;

function pencilCircle() {
    return <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />;
}
