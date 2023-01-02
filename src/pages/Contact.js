import React from 'react';
import '../css/index.css';
import Navbar from '../components/Navbar';
import Bigsection from '../components/Bigsection';
import Footer from '../components/Footer';

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <Bigsection
                title="Contact Us"
                subtitle="If you have any questions, please contact us at:"
                content=""
                settings={{
                    side: "left",
                    subtitleSize: "1.5rem"
                }}
                cards={[
                    {
                        title: "Email",
                        image: null,
                        content: "",
                        link: {
                            url: "mailto:titaniumknightsbca@gmail.com",
                            text: "titaniumknightsbca@gmail.com"
                        }
                    },
                    /*{
                        title: "Discord",
                        image: null,
                        content: "Send us a DM @",
                        link: {
                            url: "https://discordapp.com/users/668984210777833484",
                            text: "titaniumknightsrobotics#1007"
                        },
                        settings: {
                            forceColor: "white"
                        }
                    }*/
                ]}
            />
            <Footer />
        </div>
    );
}

export default Contact;