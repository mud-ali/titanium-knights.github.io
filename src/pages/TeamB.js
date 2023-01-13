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
                title="TKB"
                subtitle="15891"
                content=""
                settings={{
                    side: "right"
                }}
            />
            <Footer />
        </div>
    );
}

export default TeamA;