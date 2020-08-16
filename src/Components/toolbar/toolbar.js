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
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('main')}}>main</a></li>
                    {/* <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('game')}}>mini games</a></li> */}
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('tic_tac_toe')}}>tic tac toe</a></li>
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('hangman')}}>hangman</a></li>
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('snake')}}>snake</a></li>
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('todo')}}>todo list</a></li>
                </ul>
            </div>
            </Router>
        </nav>
    </header>
);

export default toolbar;