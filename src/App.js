import React, { Component, Fragment } from 'react';
import './App.css';
import Artist from "./Artist";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="main">
          <Header>Dr. Timothy Music</Header>
          <Artist className={"blue"} name={"Electric Guest"}/>
          <Artist className={"black"} name={"Nightrunner"}/>
          <Artist className={"yellow"} name={"Magic Sword"}/>
          <Artist className={"white"} name={"Arcade High"}/>
          <Artist className={"magenta"} name={"Brookes Brothers"}/>
          <Artist className={"black"} name={"Delta Heavy"}/>
          <Artist className={"blue"} name={"LCD Soundsystem"}/>
          <Artist className={"white"} name={"Public Service Broadcasting"}/>
          <Artist className={"yellow"} name={"Toby Fox"} description={"I'm a yellow boi"}/>
          <Artist className={"black"} name={"Yr mom"}/>
          <Artist className={"magenta"} name={"Yr mom's nan"}/>
          <Artist className={"white"} name={"Yr mom's gran"}/>
          <Artist className={"blue"} name={"Yr mom's great uncle who was a creepy fucker let's not lie we all know it"}/>

        </div>
      </Fragment>
    );
  }
}

export default App;
