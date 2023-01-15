import React from 'react';
import '../css/index.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cardsection from '../components/Cardsection';

function Contact() {
    return (
        <div className="App">
            <Navbar />
            <h1>Contact Us</h1>
            <h5>If you have any questions or concerns, or are interested in becoming a sponsor, please contact us at:</h5>
            <Cardsection
                settings={{
                    side: "left",
                    subtitleSize: "1.5rem"
                }}
                cards={[
                    {  
                        title: "Email",
                        image: null,
                        content: <span>
                                    <p>You can send us an email at:</p>
                                    <i className="fa-regular fa-envelope fa-7x"></i>
                                </span>,
                        link: {
                            url: "mailto:titaniumknightsbca@gmail.com",
                            text: "titaniumknightsbca@gmail.com"
                        }
                    },
                    {
                        title: "Instagram",
                        image: null,
                        content: <span>
                                    <p>Send us a DM @</p>
                                    <i className='fa-brands fa-instagram fa-7x'></i>
                                </span>,
                        link: {
                            url: "https://www.instagram.com/titaniumknightsftc/",
                            text: "titaniumknightsftc"
                        },
                        settings: {
                            forceColor: "white"
                        }
                    }
                ]}
            />
            <Footer />
        </div>
    );
}

export default Contact;