import React from 'react';
import '../css/index.css';
import Navbar from '../components/Navbar';
import Bigsection from '../components/Bigsection';
import Cardsection from '../components/Cardsection';
import Footer from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bigsection
        title="Titanium Knights"
        subtitle="Team 15887 and 15891"
        content="The Titanium Knights is a robotics club
          from the Bergen County Academies, a public magnet high school
          located in Hackensack, New Jersey. Our team is made up of dedicated 
          students with different levels of experience from four grade levels. 
          For the 2022-23 season, we have two teams: Team A (15887) and Team B (15891)."
        image={{src: "assets/logo/knight-in-space.png", alt:""}}
        plus={{video:"https://www.youtube.com/embed/HsitvZ0JaDc"}}
        settings={{
          subtitleSize: "1.5rem",
          side: "right"
        }}
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
      <Bigsection
        title="How Our Teams Work"
        subtitle="Each team is split up into 3 different sections, programming, non-tech, and build. Each section has their own responsibilities."
        content=""
        image={{src: "assets/logo/main_logo.png", alt:""}}
        bullets={[{
            header: "Build",
            content: [
              "This subteam is responsible for actually building the robot. The build team creates CAD models of the robot and assembles the robot. Throughout the season, they work on fixing flaws that may exist with the build."
            ]
          },
          {
            header: "Programming",
            content: [
              "This team is responsible for programming the robot. Once the robot is built, it must be able to react from user input. The programmers use Java and Kotlin to make the robot interactive and controllable via a game controller."
            ]
          },
          {
            header: "Non-Tech",
            content: [
              "Building robots is expensive, so the non-tech subteam is responsible for outreach with companies. They work to gain funding to build the robots and attend competitions. They are also responsible for everything else that is not related to build or programming."
            ]
          }]}
          settings={{
            subtitleSize: "1.5rem",
            side: "left"
          }}
      />
      <Footer />
    </div>
  );
}

export default App;
