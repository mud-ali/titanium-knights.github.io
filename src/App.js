import React from 'react';
import './css/index.css';
import Navbar from './Navbar';
import Bigsection from './Bigsection';

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
      
    </div>
  );
}

export default App;
