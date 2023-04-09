import React from 'react';
import Header from './Header';
import './style.css';
import Kuvaus from "./Kuvaus";
import Koulutus from "./Koulutus";
import Hinnasto from "./Hinnasto";
import Yht from "./Yht";
import Footer from "./Footer";
import Kuva from "./Kuva.jpeg";

function App() {
  return (
    <div className="container">
      <Header>
        <h1>Tervetuloa!<br /><span>Kielenhuollon ammattilainen palveluksessasi</span></h1>
      </Header>
      <div className="content">
        <div className="kuvaus-container">
          <Kuvaus />
        </div>
        <div className="hinnasto-koulutus-container">
          <div className="hinnasto-container">
            <Hinnasto />
          </div>
          <div className="koulutus-container">
            <Koulutus />
          </div>
        </div>
        <div className="yht-container">
          <div className="yht-left"><Yht /></div>
          <div className="yht-right"><img src={Kuva} alt="kuva" className='kuva' /></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;