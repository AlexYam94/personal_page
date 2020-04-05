import React from 'react';
import winnie from '../../winnie.JPG'
import classes from './toolbar.module.css';
import SidebarToggleButton from '../Sidebar/sidebarToggleButton';
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
                    <li><a href="/">Favourite games</a></li>
                    <li><a href="/">Favourite books</a></li>
                    {/* <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('game')}}>mini games</a></li> */}
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('tic_tac_toe')}}>tic tac toe</a></li>
                    <li><a href="javascript:;" onClick={() => {props.toolbarClickHandler('hangman')}}>hangman</a></li>
                </ul>
            </div>
            </Router>
        </nav>
    </header>
);

export default toolbar;