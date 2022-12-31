import React from 'react';
import './css/index.css';
import Navbar from './Navbar';
import Bigsection from './Bigsection';
import Cardsection from './Cardsection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bigsection
        title="Titanium Knights"
        side="right"
        subtitle="Team 15887 and 15891"
        content="The Titanium Knights is a robotics club
          from the Bergen County Academies, a public magnet high school
          located in Hackensack, New Jersey. Our team is made up of dedicated 
          students with different levels of experience from four grade levels. 
          For the 2022-23 season, we have two teams: Team A (15887) and Team B (15891)."
        image={{src: "assets/logo/knight-in-space.png", alt:""}}
        plus={{video:"https://www.youtube.com/embed/HsitvZ0JaDc"}}
      />
      <Cardsection 
        cards={[{
            title: "First Tech Challenge",
            image: null,
            content: "FIRST Tech Challenge students learn to think like engineers. Teams design, build, and code robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology, and can be coded using a variety of levels of Java-based programming."
          }, {
            title: "Power Play",
            image: null,
            content: "This year, the Titanium Knights teams are competing in the 2022-23 FTC Season: Power Play. The game consists of an autonomous and driver-controlled period. Builders need to design and create a robot to pick up cones and place them onto a variety of junctions. Programmers need to use sensors and controller input to direct the robot to perform these tasks."
          }, {
            title: "Our Teams",
            image: null,
            content: "Our rookie season for FTC was the 2018-2019 FTC season, Rover Ruckus, after competing in FRC for numerous years. Composed of two sister teams, the Titanium Knights are a group of high school students interested in building, programming, documenting, and helping out our community."
          }]}
      />
      
    </div>
  );
}

export default App;
