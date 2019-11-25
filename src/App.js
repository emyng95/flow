import React, { Component } from "react";
import { Element, animateScroll, scroller } from "react-scroll";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

//import logo from './logo.svg';

import "./App.css";
import Question from "./Component/Question";

const scrollDuration = 500;

class App extends Component {
  state = {
    previousQuestion: [],
    currentQuestion: "section0",
    nextQuestion: null,
    isScrolling: false,
    section: [
      {
        question: "I want to travel within the United State.",
        ans_1: { text: "Yes", next_q: "section1" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section2", status: "circle" },
        ans_2Class: "circle",
        shown: true,
        id: "section0"
      },
      {
        question: "Where do I want to go? the beach or the forest?",
        ans_1: { text: "Beach", next_q: "section3", status: "circle" },
        ans_1Class: "circle",
        ans_2: { text: "Forest", next_q: "section4", status: "circle" },
        ans_2Class: "circle",
        shown: false,
        id: "section1"
      },
      {
        question: "I want to stay in english speaking countries",
        ans_1: { text: "Yes", next_q: "section5" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section6" },
        ans_2Class: "circle",
        shown: false,
        id: "section2"
      },
      {
        question: "Do I want to be near a metropolitan area as well?",
        ans_1: { text: "Yes", next_q: 6 },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: 7 },
        ans_2Class: "circle",
        shown: false,
        id: "section3"
      },
      {
        question: "Do I want to be near a metropolitan area as well?",
        ans_1: { text: "Yes", next_q: 8 },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: 9 },
        ans_2Class: "circle",
        shown: false,
        id: "section4"
      },
      {
        question: "Do I have more than 5 days to travel?",
        ans_1: { text: "Yes", next_q: 10 },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: 11 },
        ans_2Class: "circle",
        shown: false,
        id: "section5"
      },
      {
        question: "Am I more of a connoisser or a nature lover",
        ans_1: { text: "Connoisser", next_q: 12 },
        ans_1Class: "circle",
        ans_2: { text: "Nature Lover", next_q: 13 },
        ans_2Class: "circle",
        shown: false,
        id: "section6"
      }
    ]
  };

  targetRef = React.createRef();
  targetElement = null;

  componentDidMount() {
    this.targetElement = this.targetRef.current;
    disableBodyScroll(this.targetElement);
  }

  componentWillUnmount() {
    clearAllBodyScrollLocks();
  }

  backButtonClickedHandler = (event, id) => {
    event.stopPropagation();
    enableBodyScroll(this.targetElement);
    let previous = [...this.state.previousQuestion];
    let next = previous[previous.length - 1];
    console.log(next);
    previous.pop();
    this.setState({
      previousQuestion: previous,
      nextQuestion: next,
      isScrolling: true
    });

    // start scrolling
    scroller.scrollTo(next, {
      duration: scrollDuration,
      delay: 100,
      smooth: true
    });

    // after scrolling
    setTimeout(() => {
      this.setState({
        currentQuestion: next,
        nextQuestion: null,
        isScrolling: false
      });
      disableBodyScroll(this.targetElement);
    }, scrollDuration + 100);
  };

  showNextOne = id => {
    enableBodyScroll(this.targetElement);
    console.log(id);
    let current = this.state.currentQuestion;
    let previous = [...this.state.previousQuestion];
    previous.push(current);
    this.setState({
      previousQuestion: previous,
      nextQuestion: id,
      isScrolling: true
    });

    // start scrolling
    scroller.scrollTo(id, {
      duration: scrollDuration,
      delay: 100,
      smooth: true
    });

    // after scrolling
    setTimeout(() => {
      this.setState({
        currentQuestion: id,
        nextQuestion: null,
        isScrolling: false
      });
      disableBodyScroll(this.targetElement);
    }, scrollDuration + 100);
  };

  circle1Pressed = idx => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circled";
    newSection[idx].ans_2Class = "circle";
    this.setState({
      section: newSection
    });
  };

  circle2Pressed = idx => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circle";
    newSection[idx].ans_2Class = "circled";
    this.setState({
      section: newSection
    });
  };

  backgroundPressed = idx => {
    let newSection = [...this.state.section];
    newSection[idx].ans_1Class = "circle";
    newSection[idx].ans_2Class = "circle";
    this.setState({
      section: newSection
    });
  };

  render() {
    const {
      previousQuestion,
      currentQuestion,
      nextQuestion,
      isScrolling
    } = this.state;

    return (
      <div className="App">
        {/* <Question
          section={this.state.section}
        /> */}

        <ul ref={this.targetRef}>
          {this.state.section.map((section, idx) => {
            if (
              true
              // section.id === currentQuestion ||
              // (section.id == nextQuestion && isScrolling === true)
            ) {
              return (
                <Element key={idx} name={section.id}>
                  <Question
                    idx={idx}
                    id={section.id}
                    section={section}
                    checkClicked={this.showNextOne}
                    turnOff={this.turnOff}
                    circle1Pressed={this.circle1Pressed}
                    circle2Pressed={this.circle2Pressed}
                    backgroundPressed={this.backgroundPressed}
                    backClicked={this.backButtonClickedHandler}
                  />
                </Element>
              );
            }
            return null;
          })}
        </ul>
      </div>
    );
  }
}

export default App;

{
  /* <header className="App-header">
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
        </header> */
}
