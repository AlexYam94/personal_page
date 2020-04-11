import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './Components/Personal_Info/personal_info';
import Link from './Components/Link/link';
import winnie from './winnie.JPG';
import Toolbar from './Components/toolbar/toolbar';
import Sidebar from './Components/Sidebar/sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Tic_tac_toe from './Components/Games/Tic_tac_toe/Game';
import Hangman from './Components/Games/Hangman/hangman';
import words from './words';

class App extends Component {
  constructor(props) {
    super(props);
    // let hangmanWord = words.data[Math.round(Math.random()*words.data.length)];
    // let hangmanCorrectCounter = hangmanWord.length;
    this.state = {
      sidebarOpen: false,
      currentPage: 'main',
      hangmanWord:  "",
      hangmanLifeCounter: 0,
      hangmanCorrectCounter: 0
    };
  };

  

  sidebarToggleClickHandler = ()=>{
    this.setState ((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  }

  backdropClickHandler = ()=>{
    this.setState ({sidebarOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    let mainView;

    switch(this.state.currentPage){
      case 'main':
        mainView = (<div><PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
          </div>);
          break;
      case 'tic_tac_toe':
        mainView = (<Tic_tac_toe/>);
        break;
      case 'hangman':
        mainView = (<Hangman resetHangmangHandler={this.resetHangmanHandler} hangmanHandler={this.hangmanHandler} word={this.state.hangmanWord} counter={this.state.hangmanLifeCounter} hangmanCorrectCounter={this.state.hangmanCorrectCounter}/>);
        break;
      default:
        mainView = (<div><PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
          </div>);
    }

    // mainView=(<Hangman></Hangman>)

    return (
      <div style={{ height: '100%' }}>
        <Toolbar toolbarClickHandler={this.toolbarClickHandler} sidebarClickHandler={this.sidebarToggleClickHandler}/>
        <Sidebar sidebarClickHandler={this.sidebarClickHandler} show={this.state.sidebarOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          {mainView}
          {/* {<PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
          <Link></Link>} */}
        </main>
      </div >
    );
  }

  toolbarClickHandler = (view) => {
    this.setState({currentPage: view});
  }

  sidebarClickHandler = (view) => {
    this.setState({currentPage: view});
    this.sidebarToggleClickHandler();
  }

  hangmanHandler = (event,index) => {
    if(event.target.value==""||event.target.value==null){
      return;
    }
    if(this.state.hangmanWord[index]===event.target.value){
      event.target.disabled = true;
      this.setState((prev) => {
        return {hangmanCorrectCounter: prev.hangmanCorrectCounter--}
      });
      
    }else{
      this.setState((prev) => {
        return {hangmanLifeCounter: prev.hangmanLifeCounter--}
      });
    }
  }

  resetHangmanHandler = () => {
    let hangmanWord = words.data[Math.round(Math.random()*words.data.length)];
    let hangmanCorrectCounter = hangmanWord.length;
    this.setState({
      hangmanCorrectCounter: hangmanCorrectCounter,
      hangmanLifeCounter: 9,
      hangmanWord: hangmanWord
    })
  }
}



export default App;
