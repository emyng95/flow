import React, {Component} from 'react';
//import logo from './logo.svg';

import './App.css';
import Question from "./Component/Question";

class App extends Component {

  state = {
    section:[
      {
        question: "I want to travel within the United State.",
        ans_1:{text:"Yes", next_q: 0},
        ans_1Class:"circle",
        ans_2:{text:"No", next_q: 1, status:"circle"},
        ans_2Class:"circle",
        shown: true,
        id:"section0",

      },
      {
        question: "Where do I want to go? the beach or the forest?",
        ans_1:{text:"Beach", next_q: 2, status:"circle"},
        ans_1Class:"circle",
        ans_2:{text:"Forest", next_q: 3, status:"circle"},
        ans_2Class:"circle",
        shown: false,
        id:"section1",


      },
      {
        question: "I want to stay in english speaking countries",
        ans_1:{text:"Yes", next_q: 4},
        ans_1Class:"circle",
        ans_2:{text:"No", next_q: 5},
        ans_2Class:"circle",
        shown: false,
        id:"section2",

      },
      {
        question: "Do I want to be near a metropolitan area as well?",
        ans_1:{text:"Yes", next_q: 6},
        ans_1Class:"circle",
        ans_2:{text:"No", next_q: 7},
        ans_2Class:"circle",
        shown: false,
        id:"section3",

      },
      {
        question: "Do I want to be near a metropolitan area as well?",
        ans_1:{text:"Yes", next_q: 8},
        ans_1Class:"circle",
        ans_2:{text:"No", next_q: 9},
        ans_2Class:"circle",
        shown: false,
        id:"section4",

      },
      {
        question: "Do I have more than 5 days to travel?",
        ans_1:{text:"Yes", next_q: 10},
        ans_1Class:"circle",
        ans_2:{text:"No", next_q: 11},
        ans_2Class:"circle",
        shown: false,
        id:"section5",

      },
      {
        question: "Am I more of a connoisser or a nature lover",
        ans_1:{text:"Connoisser", next_q: 12},
        ans_1Class:"circle",
        ans_2:{text:"Nature Lover", next_q: 13},
        ans_2Class:"circle",
        shown: false,
        id:"section6",

      },
    ]

      
  };

  showNextOne = (idx) => {
    let newSection = [...this.state.section];
    newSection[idx+1].shown = true;
    this.setState({
      section:newSection
    })
  }

  turnOff = (idx) => {
    let newSection = [...this.state.section];
    newSection[idx+1].shown = false;
    newSection[idx].ans_1Class = "circle";
    newSection[idx].ans_2Class = "circle";

    newSection[idx+1].ans_1Class = "circle";
    newSection[idx+1].ans_2Class = "circle";
    this.setState({
      section:newSection
    })
  }

  circle1Pressed = (idx) => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circled";
    newSection[idx].ans_2Class = "circle";
    this.setState({
      section:newSection
    })
  }

  circle2Pressed = (idx) => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circle";
    newSection[idx].ans_2Class = "circled";
    this.setState({
      section:newSection
    })
  }

  backgroundPressed = (idx) => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circle";
    newSection[idx].ans_2Class = "circle";
    newSection[idx+1].shown = false; //possibly remove later if can get scrolling to work 
    newSection[idx+2].shown = false; //possibly remove later if can get scrolling to work 
    this.setState({
      section:newSection
    })
  }

  render(){

    return (
      <div className="App">
        {/* <Question
          section={this.state.section}
        /> */}

        
        <ul>
          {this.state.section.map((section, idx) => {
            if (!section.shown) {
              return (null);
            }
            return(
              <Question
                key={idx}
                idx={idx}
                id={section.id}
                section={section}
                checkClicked ={this.showNextOne}
                turnOff ={this.turnOff}
                circle1Pressed={this.circle1Pressed}
                circle2Pressed={this.circle2Pressed}
                backgroundPressed ={this.backgroundPressed}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;


{/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}