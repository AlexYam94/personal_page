import React, { useEffect, Component } from 'react';
import classes from './UnityGames.module.css';
import Unity, { UnityContent } from "react-unity-webgl";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import firstGame from './ScreenShots/firstGame.JPG';
import blockBreaker from './ScreenShots/blockBreaker.JPG';
import flappyBird from './ScreenShots/flappyBird.JPG';

const UnityGames = (props) => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // var unityContent;
  // const unityContent = new UnityContent(
  //   "UnityBuilds/Build/Build.json",
  //   "UnityBuilds/Build/UnityLoader.js"
  //   );

  // return (<Unity unityContent={unityContent}/>);

  // return (
  //     <div>
  //         <p>test</p>
  //         <Unity src="Build/Build.json" loader="Build/UnityLoader.js"/>
  //     </div>
  // );
  return (
    <div className={classes.grid}>
      <div className={classes.box} data-aos="fade-left">
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid container item direction="column" alignItems="center">
            <Grid item>
              <img src={firstGame} width="200" height="200" />
            </Grid>
            <Grid item>
              <a href="https://alexy369.itch.io/the-meaningless?secret=Ir86pKovgDLLimiyG1tTqVS2J4" target="_blank">
                Play</a>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" item>
            <p>A game that ask player to reach the top wihout hitting any thing</p>
          </Grid>
        </Grid>
      </div>
      <div className={classes.box} data-aos="fade-right">
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid container item direction="column" alignItems="center">
            <Grid item>
              <img src={blockBreaker} width="200" height="200" />
            </Grid>
            <Grid item>
              <a href="https://alexy369.itch.io/block-breaker" target="_blank">
                Play
              </a>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" item>
            <p>A game that ask player to break all breakable block without the ball hitting the bottom</p>
          </Grid>
        </Grid>
      </div>
      <div className={classes.box} data-aos="fade-up">
        <Grid container direction="column" spacing={1} alignItems="center">
          <Grid container item direction="column" alignItems="center">
            <Grid item>
              <img src={flappyBird} width="200" height="200" />
            </Grid>
            <Grid item>
              <a href="https://alexy369.itch.io/yafp?secret=y8e7eUInmN0UF4Y8Vj6DeWHV29w" target="_blank">
                Play
              </a>
            </Grid>
          </Grid>
          <Grid container direction="column" alignItems="center" item>
            <p>Yet Another Flappy Bird</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default UnityGames;