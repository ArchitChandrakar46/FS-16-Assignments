import React from 'react';

import FooterSection from './components/footer/Footer';
import Header from './components/header/Header';
import BodySection from './components/body/Body';


function App() {
    return (
        <div>
           
            <Header heading="This Heading Is Displayed Using Props"/>
            <BodySection/>
            <FooterSection/>
        </div>
    );
}

export default App;
