import React from "react";

import { Parallax, ParallaxLayer } from 'react-spring/addons';
import "./Question.css";
import Circle from "./Circle";
import { Link, animateScroll as scroll } from "react-scroll";

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`



const question = props => {
  return (
    <div className="section">
      
      <div className="img" style={{ backgroundImage: "url(" + props.section.img + ")", backgroundSize: 'cover', position:'absolute', width:'100vw',height:'100vh',opacity:'0.3'}}>
  
      </div>
      <div className="img" style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', position:'absolute', width:'100vw',height:'100vh'}}>
      </div>
      <div className="question" id={props.section.question_id}>{props.section.question}</div>
      <div className="ans-selection" id={props.section.ans_id}>
        <div className="ans">
          <Circle
            className={props.section.ans_1Class}
            onClick={() => {
              props.checkClicked(props.section.ans_1.next_q);
              props.circle1Pressed(props.idx);
            }}
          />
          <div className="ans_text">{props.section.ans_1.text}</div>
        </div>
        <div className="ans">
          <Circle
            className={props.section.ans_2Class}
            onClick={() => {
              props.checkClicked(props.section.ans_2.next_q);
              props.circle2Pressed(props.idx);
            }}
          />
          <div className="ans_text">
            {props.section.ans_2.text}{" "}
            {/*what would be the ideal way of editing the css of component */}
          </div>
        </div>
        
      </div>
      <button className="backButton" onClick={e => props.backClicked(e, props.id)}> {'< Back'}</button>
    </div>
  );
};

//<div className="section" onClick = {(e)=> {e.stopPropagation();e.nativeEvent.stopImmediatePropagation();props.backgroundPressed(props.idx);}}>
//somehow adding link fixed the problem???

export default question;
