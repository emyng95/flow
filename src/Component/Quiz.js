import React, { Component } from "react";
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import { Element, animateScroll, scroller } from "react-scroll";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";


import "./Quiz.css";
import Question from "./Question";

import sandiego from "../assets/sandiego.jpg";
import seattle from "../assets/seattle.jpg";
import losangeles from "../assets/losangeles.jpg";
import bloomington from "../assets/bloomington.jpg";
import washington from "../assets/washington.jpg";
import chicago from "../assets/chicago.jpg";
import hawaii from "../assets/hawaii.jpg";
import newjersey from "../assets/newjersey.jpg";
import florida from "../assets/florida.jpg";
import montana from "../assets/montana.jpg";
import michigan from "../assets/michigan.jpg";
import page from "../assets/page.jpg";

import copenhagen from "../assets/copenhagen.jpg";
import iceland from "../assets/iceland.jpg";
import england from "../assets/england.jpg";
import rome from "../assets/rome.jpg";
import italy from "../assets/italy.jpg";
import interlaken from "../assets/interlaken.jpg";
import borabora from "../assets/borabora.jpg";
import auckland from "../assets/auckland.jpg";
import mexico from "../assets/mexico.jpg";
import turkey from "../assets/turkey.jpg";
import vietnam from "../assets/vietnam.jpg";
import bangkok from "../assets/bangkok.jpg";
import chengdu from "../assets/chengdu.jpg";
import guangzhou from "../assets/guangzhou.jpg";
import seoul from "../assets/seoul.jpg";
import kyoto from "../assets/kyoto.jpg";
import { chain } from "popmotion";

// Little helpers ...rome
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

const scrollDuration = 500;

class Quiz extends Component {
  state = {
    previousQuestion: [],
    currentQuestion: "section0",
    nextQuestion: null,
    isScrolling: false,
    section: [
      {
        question: "Do you want to travel within the United State?",
        ans_1: { text: "Yes", next_q: "section1" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section2", status: "circle" },
        ans_2Class: "circle",
        shown: true,
        blackdrop:"none",
        id: "section0"
      },
      {
        question: "Do you prefer big cities or small towns?",
        ans_1: { text: "Cities", next_q: "section3", status: "circle" },
        ans_1Class: "circle",
        ans_2: { text: "Towns", next_q: "section4", status: "circle" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section1"
      },
      {
        question: "Do you want to stay in English speaking countries?",
        ans_1: { text: "Yes", next_q: "section5" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section6" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section2"
      },
      {
        question: "Do you want to be near the beach?",
        ans_1: { text: "Yes", next_q: "section7" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section8" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section3"
      },
      {
        question: "Do you want to stay near the coasts?",
        ans_1: { text: "Yes", next_q: "section9" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section10" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section4"
      },
      {
        question: "Do you want to go to European countries?",
        ans_1: { text: "Yes", next_q: "section11" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section12" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section5"
      },
      {
        question: "Are you on a tight budget?",
        ans_1: { text: "Yes", next_q: "section13" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section14" },
        ans_2Class: "circle",
        blackdrop:"none",
        shown: false,
        id: "section6"
      },
      {
        question: "Do you want to play water sports?",
        ans_1: { text: "Yes", next_q: "section15" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section16" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section7"
      },
      {
        question: "Do you want to go shopping?",
        ans_1: { text: "Yes", next_q: "section17" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section18" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section8"
      },
      {
        question: "Do you prefer west coast or east coast?",
        ans_1: { text: "West", next_q: "section19" },
        ans_1Class: "circle",
        ans_2: { text: "East", next_q: "section20" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section9"
      },
      {
        question: "Can you stand the cold?",
        ans_1: { text: "Yes", next_q: "section21" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section22" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section10"
      },
      {
        question: "Do you want to checkout the northern lights?",
        ans_1: { text: "Yes", next_q: "section23" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section24" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section11"
      },
      {
        question: "Do you plan on going with your partner?",
        ans_1: { text: "Yes", next_q: "section25" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section26" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section12"
      },
      {
        question: "Do you value authentic local experience more than convenience?",
        ans_1: { text: "Yes", next_q: "section27" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section28" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section13"
      },
      {
        question: "Lively and Chaos or Calm and Quiet",
        ans_1: { text: "Lively", next_q: "section29" },
        ans_1Class: "circle",
        ans_2: { text: "Calm", next_q: "section30" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section14"
      },
      {
        question: "You should go to San Diego, California!",
        ans_1: { text: "", next_q: "section15" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section15" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:sandiego,
        white:"white",
        shown: false,
        id: "section15"
      },
      {
        question: "You should go to Seattle, Washington!",
        ans_1: { text: "", next_q: "section16" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section16" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:seattle,
        white:"white",
        shown: false,
        id: "section16"
      },
      {
        question: "Boutique or Shopping Mall",
        ans_1: { text: "Boutique", next_q: "section31" },
        ans_1Class: "circle",
        ans_2: { text: "Mall", next_q: "section32" },
        ans_2Class: "circle",
        blackdrop:"none",
        shown: false,
        id: "section17"
      },
      {
        question: "Do you prefer museums over skyscrapers?",
        ans_1: { text: "Yes", next_q: "section33" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section34" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section18"
      },
      {
        question: "You should go to Hilo, Hawaii!",
        ans_1: { text: "", next_q: "section19" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section19" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:hawaii,
        white:"white",
        shown: false,
        id: "section19"
      },
      {
        question: "Do you prefer visiting antique stores more than boating, fishing and eco-touring?",
        ans_1: { text: "Yes", next_q: "section35" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section36" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section20"
      },
      {
        question: "Do you want to go skiing?",
        ans_1: { text: "Yes", next_q: "section37" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section38" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section21"
      },
      {
        question: "You should go to Page, Arizona!",
        ans_1: { text: "", next_q: "section22" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section22" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:page,
        white:"white",
        shown: false,
        id: "section22"
      },
      {
        question: "Do you want to visit mutliple countries during this trip?",
        ans_1: { text: "Yes", next_q: "section39" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section40" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section23"
      },
      {
        question: "Are you excited about historical places?",
        ans_1: { text: "Yes", next_q: "section41" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section42" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section24"
      },
      {
        question: "Is this trip your honeymoon?",
        ans_1: { text: "Yes", next_q: "section43" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section44" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section25"
      },
      {
        question: "Do you like to drink and party?",
        ans_1: { text: "Yes", next_q: "section45" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section46" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section26"
      },
      {
        question: "You should go to Ho Chi Minh City, Vietnam",
        ans_1: { text: "", next_q: "section27" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section27" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:vietnam,
        white:"white",
        shown: false,
        id: "section27"
      },
      {
        question: "You should go to Bangkok, Thailand!",
        ans_1: { text: "", next_q: "section28" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section28" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:bangkok,
        white:"white",
        shown: false,
        id: "section28"
      },
      {
        question: "Do you enjoy spicy food?",
        ans_1: { text: "Yes", next_q: "section47" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section48" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section29"
      },
      {
        question: "Do you want to visit modern city more than towns with historical values?",
        ans_1: { text: "Yes", next_q: "section49" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section50" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section30"
      },
      {
        question: "You should go to Los Angeles, California!",
        ans_1: { text: "", next_q: "section31" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section31" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:losangeles,
        white:"white",
        shown: false,
        id: "section31"
      },
      {
        question: "You should go to Bloomington, Minnesota!",
        ans_1: { text: "", next_q: "section32" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section32" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:bloomington,
        white:"white",
        shown: false,
        id: "section32"
      },
      {
        question: "You should go to Washington, DC!",
        ans_1: { text: "", next_q: "section33" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section33" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:washington,
        white:"white",
        shown: false,
        id: "section33"
      },
      {
        question: "You should go to Chicago, Illinois!",
        ans_1: { text: "", next_q: "section34" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section34" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:chicago,
        white:"white",
        shown: false,
        id: "section34"
      },
      {
        question: "You should go to Lambertville, New Jersey!",
        ans_1: { text: "", next_q: "section35" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section35" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:newjersey,
        white:"white",
        shown: false,
        id: "section35"
      },
      {
        question: "You should go to Crystal River, Florida!",
        ans_1: { text: "", next_q: "section36" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section36" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:florida,
        white:"white",
        shown: false,
        id: "section36"
      },
      {
        question: "You should go to Whitefish, Montana!",
        ans_1: { text: "", next_q: "section37" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section37" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:montana,
        white:"white",
        shown: false,
        id: "section37"
      },
      {
        question: "You should go to Houghton, Michigan!",
        ans_1: { text: "", next_q: "section38" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section38" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:michigan,
        white:"white",
        shown: false,
        id: "section38"
      },
      {
        question: "You should go to Copenhagen, Denmark!",
        ans_1: { text: "", next_q: "section39" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section39" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:copenhagen,
        white:"white",
        shown: false,
        id: "section39"
      },
      {
        question: "You should go to Seltjarnarnes, Iceland!",
        ans_1: { text: "", next_q: "section40" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section40" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:iceland,
        white:"white",
        shown: false,
        id: "section40"
      },
      {
        question: "Do you think you would enjoy prehistorical monuments?",
        ans_1: { text: "Yes", next_q: "section51" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section52" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section41"
      },
      {
        question: "Do you want to be near the ocean or the mountains?",
        ans_1: { text: "Yes", next_q: "section53" },
        ans_1Class: "circle",
        ans_2: { text: "No", next_q: "section54" },
        ans_2Class: "circle",
        shown: false,
        blackdrop:"none",
        id: "section42"
      },
      {
        question: "You should go to Bora Bora, Tahiti!",
        ans_1: { text: "", next_q: "section43" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section43" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:borabora,
        white:"white",
        shown: false,
        id: "section43"
      },
      {
        question: "You should go to Auckland, New Zealand!",
        ans_1: { text: "", next_q: "section44" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section44" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:auckland,
        white:"white",
        shown: false,
        id: "section44"
      },
      {
        question: "You should go to Cancun, Mexico!",
        ans_1: { text: "", next_q: "section45" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section45" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:mexico,
        white:"white",
        shown: false,
        id: "section45"
      },
      {
        question: "You should go to Cappadocia, Turkey!",
        ans_1: { text: "", next_q: "section46" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section46" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:turkey,
        white:"white",
        shown: false,
        id: "section46"
      },
      {
        question: "You should go to Chengdu, China!",
        ans_1: { text: "", next_q: "section47" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section47" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:chengdu,
        white:"white",
        shown: false,
        id: "section47"
      },
      {
        question: "You should go to Guangzhou, China!",
        ans_1: { text: "", next_q: "section48" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section48" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:guangzhou,
        white:"white",
        shown: false,
        id: "section48"
      },
      {
        question: "You should go to Seoul, Korea!",
        ans_1: { text: "", next_q: "section49" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section49" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:seoul,
        white:"white",
        shown: false,
        id: "section49"
      },
      {
        question: "You should go to Kyoto, Japan!",
        ans_1: { text: "", next_q: "section50" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section50" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:kyoto,
        white:"white",
        shown: false,
        id: "section50"
      },
      {
        question: "You should go to Stonehenge, England!",
        ans_1: { text: "", next_q: "section51" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section51" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:england,
        white:"white",
        shown: false,
        id: "section51"
      },
      {
        question: "You should go to Rome, Italy!",
        ans_1: { text: "", next_q: "section52" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section52" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:rome,
        white:"white",
        shown: false,
        id: "section52"
      },
      {
        question: "You should go to Cirque Terre, Italy!",
        ans_1: { text: "", next_q: "section53" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section53" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:italy,
        white:"white",
        shown: false,
        id: "section53"
      },
      {
        question: "You should go to Interlaken, Switzerland!",
        ans_1: { text: "", next_q: "section54" },
        ans_1Class: "none",
        ans_2: { text: "", next_q: "section54" },
        ans_2Class: "none",
        ans_id: "none",
        question_id: "margin_auto",
        img:interlaken,
        white:"white",
        shown: false,
        id: "section54"
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

//   backgroundPressed = idx => {
//     let newSection = [...this.state.section];
//     newSection[idx].ans_1Class = "circle";
//     newSection[idx].ans_2Class = "circle";
//     this.setState({
//       section: newSection
//     });
//   };

  render() {
    const {
      previousQuestion,
      currentQuestion,
      nextQuestion,
      isScrolling
    } = this.state;

    return (
      <div className="Quiz">

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
                    // backgroundPressed={this.backgroundPressed}
                    backClicked={this.backButtonClickedHandler}
                  />
                  {/* <Parallax className="Homepage" ref={ref => (this.parallax = ref)} pages={1}>
                    <ParallaxLayer offset={0} speed={0.2} factor={1} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
                  </Parallax> */}

                  
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

export default Quiz;


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
