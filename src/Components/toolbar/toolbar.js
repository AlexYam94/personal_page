import React from 'react';
import winnie from '../../winnie.JPG'
import classes from './toolbar.module.css';
import SidebarToggleButton from '../Sidebar/sidebarToggleButton';

const toolbar = props => (
    <header className={classes.toolbar}>
        <nav className={classes.toolbar_navigation}>
            <div><SidebarToggleButton click={props.sidebarClickHandler}/></div>
            <div className={classes.toolbar_logo}>
                <a href="/">
                    <img src={winnie} />
                </a>
            </div>
            <div className={classes.spacer}></div>
            <div className={classes.toolbar_navigation_items}>
                <ul>
                    <li><a href="/">test</a></li>
                    <li><a href="/">Favourite games</a></li>
                    <li><a href="/">Favourite books</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;