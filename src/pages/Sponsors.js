import React from 'react';
import '../css/index.css';
import Navbar from '../components/Navbar';
import Cardsection from '../components/Cardsection';
import Footer from '../components/Footer';

function TeamA() {
    return (
        <div className="App">
            <Navbar />
            <Cardsection 
                cards={[{
                    title: "Gaba Printing",
                    image: ["assets/sponsors/gaba-logo.png",""],
                    content: "Gaba Printing can print any sort of merchandise you need. They printed these incredibly poggers t-shirts for us, so thanks!"
                }, {
                    title: "Google",
                    image: ["assets/sponsors/google-logo.png",""],
                    content: "This year, we were lucky to receive funds from the world's largest search engine, Google. Thanks for the support!"
                }, {
                    title: "Our Teams",
                    image: null,
                    content: "Our rookie season for FTC was the 2018-2019 FTC season, Rover Ruckus, after competing in FRC for numerous years. Composed of two sister teams, the Titanium Knights are a group of high school students interested in building, programming, documenting, and helping out our community."
                }]}
            />
            <Footer />
        </div>
    );
}

export default TeamA;