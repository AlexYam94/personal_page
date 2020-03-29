import React from 'react';
import classes from './sidebarToggleButton.module.css';
import winnie from '../../winnie.JPG'

const sidebarToggleButton = props => (
        <button className={classes.toggle_button} onClick={props.click}>
            <div className={classes.toggle_button_line}></div>
            <div className={classes.toggle_button_line}></div>
            <div className={classes.toggle_button_line}></div>
        </button>
);

export default sidebarToggleButton;