import React from 'react';
import Art from './Art';
import classes from './PixelArt.module.css';
import FirstCharacter from './Arts/First character.png';
import SouthDakoda from './Arts/South Dakoda.png';

const PixelArt = props => {


    return (
        <div>
            <Art className={classes.art} name="South Dakoda" image={SouthDakoda}/>
            <Art className={classes.art} name="First Character" image={FirstCharacter}/>
        </div>
        );
};

export default PixelArt;