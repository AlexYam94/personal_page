import React from 'react';
import Art from './Art';
import classes from './PixelArt.module.css';
import FirstCharacter from './Arts/First character.png';


const PixelArt = props => {


    return (
        <Art className={classes.art} image={FirstCharacter}/>
        );
};

export default PixelArt;