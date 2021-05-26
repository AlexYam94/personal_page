import React, { useEffect, useState} from 'react';
import classes from './Personal_info.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import nt from './logo120.png';
import ouhk from './OUHK_Logo_1.jpg';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import Bg from './bg';

const Personal_info = (props) => {
    const [test, setTest] = useState(null);
    const isMobile = useMediaQuery({query: '(max-width: 800px)'})
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])

    return(
        <div>
            <div data-aos="flip-up" className={classes.Personal_info}>
                <p>Hello, I am Alex Yam</p>
                <br/>
                <p>An introvert, a programmer and a hobbyist game developer</p>
                <br/>
                <br/>
                <br/>
                <p>Scroll down for more......</p>
            </div>
            {/* <div data-aos="flip-right" data-aos-offset="100" className={classes.Personal_info}>
                <p>Wish to know more?</p>
                <br/>
                <p>Scroll down then......</p>
            </div> */}
            <div>
            {isMobile?<div data-aos="fade-down" className={classes.background}>
                <Bg/>
                {/* <h2 style={{textAlign: "center"}}>A little bit about me</h2>
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
                <p>As a self-taught hobbyist game dev I enjoy implementing game mechanisms because that takes a lot of effort and creative thinking. It is both fun and challenging. It will be more challenging if I do it without a game eninge but I haven't try yet.</p>
                <br/>
                <br/>
                <br/>
                <p>When I am at my free time, I usually play some video games, read some books and developing my personal projects, which is mostly game.</p> */}
            </div>:
            <div data-aos="fade-down" data-aos-offset={710} className={classes.background}>
                <Bg/>
                {/* <h2 style={{textAlign: "center"}}>A little bit about me</h2>
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
                <p>As a self-taught hobbyist game dev I enjoy implementing game mechanisms because that takes a lot of effort and creative thinking. It is both fun and challenging. It will be more challenging if I do it without a game eninge but I haven't try yet.</p>
                <br/>
                <br/>
                <br/>
                <p>When I am at my free time, I usually play some video games, read some books and developing my personal projects, which is mostly game.</p> */}
            </div>}
            </div>
            <div style={{textAlign: "center"}} data-aos-offset={60} data-aos="fade-down" className={classes.github}>
                <h2 style={{textAlign: "center"}}>github</h2>
                <a  href="https://github.com/rm-rf-rm-rf-rm-rf?tab=overview&from=2021-05-01&to=2021-05-20" target="_blank">github page</a>
            </div>
    </div>
        )
    
}

export default Personal_info;