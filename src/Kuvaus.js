import React from 'react';

const Kuvaus = () => {
  return (
    <div>
      <h1 className='kuvaus-h1'>Kielenhuolto ja selkeä kieli - monen mielestä varmasti maailman kuivinta hommaa, mun mielestä kuitenkin ihan parasta!</h1>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className='list-container-mita' style={{ flex: 1 }}>
          <h2><b>Mitä?</b></h2>
          <ul>
            <li>Tarjoan osaamistani ja innostustani tekstien käsittelyä kohtaan myös sinun käyttöösi. </li>
            <li>Tekstisi voi olla esimerkiksi opinnäytetyö, lehtiartikkeli tai verkkosivuille tuleva tiedote.</li>
            <li>Luen tekstisi läpi, korjaan siitä esimerkiksi mahdolliset kirjoitus- ja kielioppivirheet, jäsentelen tekstin rakenteen sujuvaksi ja ehdotan toisenlaisia lauserakenteita.</li>
          </ul>
        </div>
        <div className='list-container-miksi' style={{ flex: 1 }}>
          <h2><b>Miksi kirjoitetun tekstin selkeys, virheettömyys ja helppolukuisuus on tärkeää?</b></h2>
          <ul>
            <li>Selkeän kielen periaatteiden mukaisesti kirjoitettu teksti tavoittaa lukijan todennäköisemmin kuin teksti, jossa näitä seikkoja ei ole huomioitu.</li>
            <li>Yhteydenottojen määrä asiakaspalveluun vähenee, kun asiakas ymmärtää, mitä hänen tulee tehdä.</li>
            <li>Jäsennelty ja kielellisesti virheetön teksti on helppoa ja miellyttävää luettavaa.</li>
            <li>Virheetön teksti antaa sinusta ja yrityksestäsi ammattimaisen kuvan.</li>
            <li>Saavutettavuus ei koskea ainoastaan värikontrasteja ja kuvien alt-tekstejä: se kattaa myös ymmärrettävän kielen.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kuvaus;