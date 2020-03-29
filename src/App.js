import React, { Component } from 'react';
import './App.css';
import PersonalInfo from './Components/Personal_Info/personal_info';
import Link from './Components/Link/link';
import winnie from './winnie.JPG';
import Toolbar from './Components/toolbar/toolbar';
import Sidebar from './Components/Sidebar/sidebar';
import Backdrop from './Components/Backdrop/Backdrop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
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


    return (
      <div style={{ height: '100%' }}>
        <Toolbar sidebarClickHandler={this.sidebarToggleClickHandler}/>
        <Sidebar show={this.state.sidebarOpen}/>
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <PersonalInfo style={{ margin_top: 100 }}></PersonalInfo>
          <Link></Link>
        </main>
      </div >
    );
  }
}



export default App;
