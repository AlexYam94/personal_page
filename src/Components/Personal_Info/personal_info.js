import React, { useEffect, useState} from 'react';
import classes from './Personal_info.module.css';

const Personal_info = (props) => {
    const [test, setTest] = useState(null);

    useEffect(() => {
    }, [])

    return(
        <div className={classes.Personal_info}>
            {/* <p>Name: Alex</p>
            <p>Hobby: Reading, playing video games</p>
            <p>Introvert</p>
            <p>test get api: {test}</p> */}
            <p>Hello World</p>
        </div>
        )
    
}

export default Personal_info;