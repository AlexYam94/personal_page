import React from 'react';
import winnie from '../../winnie.JPG'
import classes from './Toolbar.module.css';
import SidebarToggleButton from '../Sidebar/SidebarToggleButton';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Games from '../MiniGames/Tic_tac_toe/Game';
import { DropdownButton, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const Toolbar = (props) => {


    return (
        <header className={classes.toolbar}>
            <nav className={classes.toolbar_navigation}>
                {/* <Router> */}
                <MediaQuery maxWidth={500}>
                    <div><SidebarToggleButton click={props.sidebarClickHandler} /></div>
                </MediaQuery>
                {/* <div className={classes.toolbar_logo}>
                    <a href="/">
                        <img src={winnie} />
                    </a>
                </div> */}
                <MediaQuery minWidth={501}>
                    <div className={classes.spacer}></div>
                    <div className={classes.toolbar_navigation_items}>
                        {
                            // #region Router navigation
                        }
                        <Link className={classes.button} to='/'>
                            main
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </Link>

                        <Link className={classes.button} to='/unity_games'>
                            unity games
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </Link>
                        <MediaQuery minWidth={1200}>
                            <DropdownButton style={{ marginRight: 10 }} as={ButtonGroup} key={'Info'} title='Web Games' variant='info'>
                                <Dropdown.Item style={{ color: 'black' }}>
                                    <Link className={classes.button} to='/tic_tac_toe'>
                                        <p>tic tac toe</p>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                            {pencilCircle()}
                                        </svg>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <Link className={classes.button} to='/hangman'>
                                        <p>hangman</p>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                            {pencilCircle()}
                                        </svg>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                    <Link className={classes.button} to='/snake'>
                                        <p>snake</p>
                                        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                            {pencilCircle()}
                                        </svg>
                                    </Link>
                                </Dropdown.Item>
                            </DropdownButton>
                        </MediaQuery>
                        <Link className={classes.button} to='/todo'>
                            todo
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                                {pencilCircle()}
                            </svg>
                        </Link>
                        {
                            // #endregion
                        }
                    </div>
                </MediaQuery>
            </nav>
        </header>
    );
};

export default Toolbar;

function pencilCircle() {
    return <path fill="none" d="M325,18C228.7-8.3,118.5,8.3,78,21C22.4,38.4,4.6,54.6,5.6,77.6c1.4,32.4,52.2,54,142.6,63.7 c66.2,7.1,212.2,7.5,273.5-8.3c64.4-16.6,104.3-57.6,33.8-98.2C386.7-4.9,179.4-1.4,126.3,20.7" />;
}
