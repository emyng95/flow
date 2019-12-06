import posed from "react-pose";

const Circle = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow:
      "0 0 60px 10px rgba(255, 255, 255, 0.473),0 0 100px 5px rgba(255, 95, 95, 0.438), 0 0 140px 2px rgba(255, 255, 255, 0.24)"
  },
  hover: {
    scale: 1.4,
    boxShadow:
      "0 0 60px 10px rgba(255, 95, 95, 0.438),0 0 100px 5px rgba(255, 95, 95, 0.438), 0 0 140px 2px rgba(255, 255, 255, 0.24)"
  },
  press: {
    scale: 1.2,
    boxShadow:
      "0 0 60px 10px rgba(255, 95, 95, 0.438),0 0 100px 5px rgba(255, 95, 95, 0.438), 0 0 140px 2px rgba(255, 255, 255, 0.24)"
  }
});

export default Circle;
