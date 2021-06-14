import React, { useEffect, Component } from 'react';
import classes from './UnityGames.module.css';
import Unity, { UnityContent } from "react-unity-webgl";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Grid from '@material-ui/core/Grid';
import Aos from 'aos';
import 'aos/dist/aos.css';
import UnityGameSegment from './UnityGameSegments';
import firstGame from './ScreenShots/firstGame.JPG';
import blockBreaker from './ScreenShots/blockBreaker.JPG';
import flappyBird from './ScreenShots/flappyBird.JPG';
import rpg from './ScreenShots/rpg.jpg';
import fallchain from './ScreenShots/fallchain.JPG';


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
        <UnityGameSegment desc="GMTK Game Jam 2021 - Fall Chain / 鏈落" url="https://alexy369.itch.io/fallchainweb" img={fallchain}/>
      </div>
      <div className={classes.box} data-aos="fade-right">
        <UnityGameSegment desc="RPG prototype playground" url="https://alexy369.itch.io/rpg-demo?secret=KeqdA9DFzYF88skDtBygjX3Taq8" img={rpg}/>
      </div>
      <div className={classes.box} data-aos="fade-up">
        <UnityGameSegment desc="Yet Another Flappy Bird" url="https://alexy369.itch.io/yafp?secret=y8e7eUInmN0UF4Y8Vj6DeWHV29w" img={flappyBird}/>
      </div>
      <div className={classes.box} data-aos="fade-down">
        <UnityGameSegment desc="A game that ask player to break all breakable block without the ball hitting the bottom" url="https://alexy369.itch.io/block-breaker" img={blockBreaker}/>
      </div>
      <div className={classes.box} data-aos="fade-down">
        <UnityGameSegment desc="A game that ask player to reach the top wihout hitting any thing" url="https://alexy369.itch.io/the-meaningless?secret=Ir86pKovgDLLimiyG1tTqVS2J4" img={firstGame}/>
      </div>
    </div>
  );
}

export default UnityGames;