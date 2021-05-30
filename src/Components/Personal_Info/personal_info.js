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
            <div>
            {isMobile?<div data-aos="fade-down" className={classes.background}>
                <Bg/>
            </div>:
            <div data-aos="fade-down" data-aos-offset={710} className={classes.background}>
                <Bg/>
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