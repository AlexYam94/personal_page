import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom'
import './App.css';
import PersonalInfo from './Components/Personal_Info/Personal_info';
import Toolbar from './Components/toolbar/Toolbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Unity_games from './Components/UnityGames/UnityGames';
import Tic_tac_toe from './Components/MiniGames/Tic_tac_toe/Game';
import Hangman from './Components/MiniGames/Hangman/Hangman';
import Snake from './Components/MiniGames/Snake/Snake';
import Todo from './Components/Todo/Todo';
import PixelArt from './Components/PixelArts/PixelArt';
import words from './words';

class App extends Component {
  constructor(props) {
    super(props);
    // let hangmanWord = words.data[Math.round(Math.random()*words.data.length)];
    // let hangmanCorrectCounter = hangmanWord.length;
    this.state = {
      sidebarOpen: false,
      currentPage: 'main',
      hangmanWord: "",
      hangmanLifeCounter: 0,
      hangmanCorrectCounter: 0,
      snake: {
        x: 0,
        y: 0
      }
    };
  };



  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  }

  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  }

  handleView = () => {
    let mainView = "";
    switch (this.state.currentPage) {
      case 'main':
        mainView = (<div><PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
        </div>);
        break;
        case 'unity_games':
          mainView = (<Unity_games/>);
          break;
      case 'tic_tac_toe':
        mainView = (<Tic_tac_toe />);
        break;
      case 'hangman':
        mainView = (<Hangman resetHangmangHandler={this.resetHangmanHandler} hangmanHandler={this.hangmanHandler} word={this.state.hangmanWord} counter={this.state.hangmanLifeCounter} hangmanCorrectCounter={this.state.hangmanCorrectCounter} />);
        break;
      case 'snake':
        mainView = <Snake snakeMoveHandler={this.snakeMoveHandler} snake={this.state.snake} />;
        break;
      case 'todo':
          mainView = <Todo />;
          break;
      default:
        mainView = (<div><PersonalInfo style={{ margin_top: 100 }}></PersonalInfo></div>);
    }
    return mainView;
  }

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let mainView = this.handleView();



    // mainView=(<Hangman></Hangman>)

    // return (
    //   <div style={{ height: '100%' }}>
    //     <Toolbar toolbarClickHandler={this.toolbarClickHandler} sidebarClickHandler={this.sidebarToggleClickHandler} />
    //     <Sidebar sidebarClickHandler={this.sidebarClickHandler} show={this.state.sidebarOpen} />
    //     {backdrop}
    //     <main style={{ marginTop: '64px' }}>
    //       {mainView}
    //     </main>
    //   </div >
    // );

    return (
      <div style={{ height: '100%' }}>
        <HashRouter>
        <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler} />
        <Sidebar sidebarClickHandler={this.sidebarClickHandler} show={this.state.sidebarOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <Switch >
            <Route path='/personal_page/unity_games'>
              <Unity_games />
            </Route>
            <Route path='/personal_page/tic_tac_toe'>
              <Tic_tac_toe/>
            </Route>
            <Route path='/personal_page/hangman'>
              <Hangman resetHangmangHandler={this.resetHangmanHandler} hangmanHandler={this.hangmanHandler} word={this.state.hangmanWord} counter={this.state.hangmanLifeCounter} hangmanCorrectCounter={this.state.hangmanCorrectCounter} />
            </Route>
            <Route path='/personal_page/snake'>
              <Snake snakeMoveHandler={this.snakeMoveHandler} snake={this.state.snake} />
            </Route>
            <Route path='/personal_page/todo'>
              <Todo />
            </Route>
            <Route path='/personal_page/pixelArt'>
              <PixelArt/>
            </Route>
            <Route path='/personal_page'>
              <PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
            </Route>
            <Route path='*'>
              <PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
            </Route>
          </Switch>
        </main>
        </HashRouter>
      </div>
    );
  }

  toolbarClickHandler = (view) => {
    this.setState({ currentPage: view });
  }

  sidebarClickHandler = (view) => {
    this.setState({ currentPage: view });
    this.sidebarToggleClickHandler();
  }

  hangmanHandler = (event, index) => {
    console.log(event.target.value);
    console.log(index);
    console.log(this.state.hangmanWord[index]);
    if (event.target.value == "" || event.target.value == null) {
      return;
    }
    if (this.state.hangmanWord[index] === event.target.value) {
      event.target.disabled = true;
      this.setState((prev) => {
        return { hangmanCorrectCounter: prev.hangmanCorrectCounter-1 }
      });

    } else {
      this.setState((prev) => {
        return { hangmanLifeCounter: prev.hangmanLifeCounter-1 }
      });
    }
  }

  resetHangmanHandler = () => {
    let hangmanWord = words.data[Math.round(Math.random() * words.data.length)];
    let hangmanCorrectCounter = hangmanWord.length;
    this.setState({
      hangmanCorrectCounter: hangmanCorrectCounter,
      hangmanLifeCounter: 9,
      hangmanWord: hangmanWord
    })
  }

  snakeMoveHandler = (event) => {
    let pos = {...this.state.snake};
    console.log(pos);
    switch (event.keyCode) {
      case 87:
        //move up
        this.setState((prev) => {
          let snake = Object.assign({},prev.snake);
          snake.y= snake.y-25;
          if(snake.y<0)
            snake.y=500;
          return {snake: snake};
        });
        break;
      case 83:
      //move down
        this.setState((prev) => {
          let snake = Object.assign({},prev.snake);
          snake.y= snake.y+25;
          if(snake.y>500)
            snake.y=0;
          return {snake: snake};
        });
        break;
      case 65:
      //move left
        this.setState((prev) => {
          let snake = Object.assign({},prev.snake);
          snake.x= snake.x-25;
          if(snake.x<0)
            snake.x=500;
          return {snake: snake};
        });
        break;
      case 68:
      //move right
        this.setState((prev) => {
          let snake = Object.assign({},prev.snake);
          snake.x= snake.x+25;
          if(snake.x>500)
            snake.x=0;
          return {snake: snake};
        });
        break;
    }
  }
}



export default App;
