import React from 'react';
import classes from './Sidebar.module.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { DropdownButton, ButtonGroup } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = props => {


    let sidebarClasses = [classes.sidebar];
    if (props.show) {
        sidebarClasses = [classes.sidebar, classes.open];
    }
    return (
        <div>
            <nav className={sidebarClasses.join(' ')}>
                <ul>
                    <li> <Link className={classes.button} to='/'>
                        main
                    </Link>
</li>
                    <li> <Link className={classes.button} to='/unity_games'>
                        unity games
                    </Link></li>
                    <li>
                    <Link className={classes.button} to='/todo'>
                        todo
                    </Link></li>
                </ul>
            </nav>
        </div>);
};

export default Sidebar;