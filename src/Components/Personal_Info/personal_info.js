import React from 'react';
import classes from './personal_info.module.css';

const personal_info = (props) => {
        return(
        <div className={classes.Personal_info}>
            <p>Name: Alex</p>
            <p>Hobby: Reading, playing video games(including RingFit Advanture)</p>
        </div>
        )
    
}

export default personal_info;