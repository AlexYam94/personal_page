import React, { useEffect, useState} from 'react';
import nt from './logo120.png';
import ouhk from './OUHK_Logo_1.jpg';

const Bg = (props) => {
    return (
        <div>
            <h2 style={{textAlign: "center"}}>A little bit about me</h2>
                <p>I am currently a fulltime programmer mainly focus developing commercial linux application and internal web console, as well as fixing bugs for exisiting application and console, for a telecommunication industry vendor, Neuralt Technologies Limited. </p><img src={nt} width="100"/>
                <br/>
                <br/>
                <br/>
                <p>I graduated from the Open University of Hong Kong, with First Honor in Bachelor of Electronic and Computer Engineering. </p><img src={ouhk} width="30" height="40"/>
                <br/>
                <br/>
                <br/>
                <p>As a programmer I enjoy working on a variety of different projects because it allows me to learn new things and interact with new technologies, which will almost always help me growing as a person.</p>
                <br/>
                <br/>
                <br/>
                <p>As a self-taught hobbyist game dev I enjoy implementing game mechanisms because that takes a lot of effort and creative thinking. It is both fun and challenging. Recently I am working on cleaning up the mess I made on my RPG protoype project.</p>
                <br/>
                <br/>
                <br/>
                <p>When I am at my free time, I usually play video game, read book, learn new stuff and work on my personal project, which is mostly game.</p>
        </div>
    )
}

export default Bg;