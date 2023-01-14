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
                color="light"
                noSlant={true}
                cards={[{
                    title: "Gaba Printing",
                    image: ["assets/sponsors/gaba-logo.png",""],
                    content: "Gaba Printing can print any sort of merchandise you need. They printed these incredibly poggers t-shirts for us, so thanks!"
                }, {
                    title: "Google",
                    image: ["assets/sponsors/google-logo.png","Google"],
                    content: "This year, we were lucky to receive funds from the world's largest search engine, Google. They were also super useful in searching up things because yeah that's what they do best"
                }, {
                    title: "SendCutSend",
                    image: ["assets/sponsors/sendcutsend-logo.png",""],
                    content: "SendCutSend is our go to supplier for custom parts that we use in our robots. They offer a wide variety of products and fast delivery times, which are sure to speed up your build process."
                }]}
            />
            <Cardsection
                noSlant={true}
                color="dark"
                cards={[{
                    title: "Gobilda",
                    image: ["assets/sponsors/gobilda-logo.png",""],
                    content: "GoBilda makes like parts or something and we really like them. They are very cool people so thanks go buy stuff from them"
                }, {
                    title: "JDM Construction",
                    image: ["assets/sponsors/jdm-construction-logo.png",""],
                    content: "JDM Construction is a local construction company that has been a huge help to us. They are great at construction and yeah."
                }, {
                    title: "PowerTech",
                    image: ["assets/sponsors/powertech-logo.png",""],
                    content: "PowerTech is a local company that makes custom power supplies for robots. Lorem ipsum dolor sit amet"
                }]}
            />
            
            <Footer />
        </div>
    );
}

export default TeamA;