import React from "react";
import "./Question.css";
import Circle from "./Circle";
import { Link, animateScroll as scroll } from "react-scroll";

const question = props => {
  return (
    <div
      className="section"
      onClick={() => {
        props.backgroundPressed(props.idx);
      }}
    >
      <button onClick={e => props.backClicked(e, props.id)}>Back button</button>
      <div className="question">{props.section.question}</div>
      <div className="ans-selection">
        <Link
          activeClass="active"
          to={props.section.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
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
        </Link>
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
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
        </Link>
      </div>
    </div>
  );
};

//<div className="section" onClick = {(e)=> {e.stopPropagation();e.nativeEvent.stopImmediatePropagation();props.backgroundPressed(props.idx);}}>
//somehow adding link fixed the problem???

export default question;
