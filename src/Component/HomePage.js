import React, {Component} from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/addons';
import "./HomePage.css"
import appRoutes from "../shared/appRoutes";
import {Link} from 'react-router-dom';
import globe from "../assets/globe.svg";
import plane from "../assets/plane.svg";
import india from "../assets/india.svg";
import japan from "../assets/japan.svg";
import london from "../assets/london.svg";
import nyc from "../assets/nyc.svg";
import pisa from "../assets/pisa.svg";
import rome from "../assets/rome.svg";
import sf from "../assets/sf.svg";
import sydney from "../assets/sydney.svg";
import taipei from "../assets/taipei.svg";

// Little helpers ...
const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`



class Homepage extends Component {
  render() {
    return (
      <Parallax className="Homepage" ref={ref => (this.parallax = ref)} pages={3.5}>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex:'100',cursor:'pointer'}}>
           <p className="homepage_text" style={{ fontSize:'calc(20px + 2vmin)', display: 'block', width: '40%', color:'white', userSelect:'none'}} >
            Can't decide where to go for your next vacation?
            </p>
        </ParallaxLayer>

        

        <ParallaxLayer offset={0} speed={0.2} factor={4} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={0.54} speed={-0.2} style={{ opacity: 0.9 }}>
          <img src={globe} style={{ display: 'block', width: '20%', marginLeft: '70%', transform: 'rotate(15deg)' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.20} speed={-0.4} style={{ opacity: 1 }}>
          <img src={plane} style={{ display: 'block', width: '20%', marginLeft: '10%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={0.8} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '25%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '10%' }} />
        </ParallaxLayer>

    

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>
        

        <ParallaxLayer offset={1.8} speed={0.2} style={{ opacity: 0.6 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.7} speed={-0.2} style={{ opacity: 1 ,zIndex:'100'}}>
          <img src={url('cloud')} style={{ display: 'block', width: '8%', marginLeft: '49%' }} />
        </ParallaxLayer>



        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.2 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '65%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.3} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4} style={{ opacity: 0.3 }}>
          <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '25%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 1 ,zIndex:'100'}}>
          <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '65%' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={1.2} speed={0.2} style={{ opacity: 1 }}>
          <img src={japan} style={{ display: 'block', width: '22%', marginLeft: '15%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={0.2} style={{ opacity: 1 }}>
          <img src={rome} style={{ display: 'block', width: '15%', marginLeft: '75%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} speed={0.2} style={{ opacity: 1 }}>
          <img src={india} style={{ display: 'block', width: '12%', marginLeft: '38%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.2} style={{ opacity: 0.9 }}>
          <img src={pisa} style={{ display: 'block', width: '18%', marginLeft: '17%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>


        <ParallaxLayer offset={2.1} speed={0.2} style={{ opacity: 1 }}>
          <img src={taipei} style={{ display: 'block', width: '40%', marginLeft: '45%', transform: 'rotate(0deg)' }} />
        </ParallaxLayer>




        {/*
        <ParallaxLayer
          offset={2}
          speed={-0.3}
          style={{
            backgroundSize: '80%',
            backgroundPosition: 'center',
            backgroundImage: url('clients', true)
          }}
        /> 
        */}

        

        

        {/* <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => this.parallax.scrollTo(2)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={url('bash')} style={{ width: '40%' }} />
        </ParallaxLayer> */}


        <ParallaxLayer
          offset={2.5}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <p className="homepage_text" style={{ fontSize:'calc(20px + 2vmin)', display: 'block', width: '46%', color: 'white'}} >
            Complete this quiz & find out where you should go!
          </p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.3}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center',zIndex:'150'}}
          speed={-0}>
          <Link to={appRoutes.quiz} style={{ textDecoration:'none'}}>
          <p className="startButton" style={{ fontSize:'1.5em', display: 'block', color:'#414141', padding:'0.5em 1em ', borderRadius:'10px', backgroundColor:'white', textDecoration:'none', userSelect:'none' }} >
            Let's Begin
          </p>
        </Link>
        </ParallaxLayer>

      </Parallax>
    )
  }
}

export default Homepage
