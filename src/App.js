import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './Components/Personal_Info/personal_info';
import Link from './Components/Link/link';
import winnie from './winnie.JPG';
import Toolbar from './Components/toolbar/toolbar';
import Sidebar from './Components/Sidebar/sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import Game from './Components/Games/tic_tac_toe/Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      currentPage: 'main'
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
          <Link></Link></div>);
          break;
      case 'game':
        mainView = (<Game></Game>);
        break;
      default:
        mainView = (<div><PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
          <Link></Link></div>);
    }

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
}



export default App;
