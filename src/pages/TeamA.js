import React from 'react';
import '../css/index.css';
import Navbar from '../components/Navbar';
import Bigsection from '../components/Bigsection';
import Footer from '../components/Footer';

function TeamA() {
    return (
        <div className="App">
            <Navbar />
            <Bigsection
                title="TKA"
                subtitle="15887"
                content=""
                settings={{
                    side: "left"
                }}
            />
            <Footer />
        </div>
    );
}

export default TeamA;