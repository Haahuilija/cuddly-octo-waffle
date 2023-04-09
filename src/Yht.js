import React, { useState } from 'react';
import axios from 'axios';

function Yht() {
  const [nimi, setNimi] = useState('');
  const [sahkoposti, setSahkoposti] = useState('');
  const [teksti, setTeksti] = useState('');
  const [aikataulu, setAikataulu] = useState('');
  const [muuta, setMuuta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nimi,
      sahkoposti,
      teksti,
      aikataulu,
      muuta,
    };
    axios.post('/send-email', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1 className='ota-yht-h1'>Ota yhteyttä</h1>
      <div>
        <label htmlFor="nimi">Nimi:</label>
        <input type="text" id="nimi" value={nimi} onChange={(e) => setNimi(e.target.value)} />
      </div>
      <div>
        <label htmlFor="sahkoposti">Sähköpostiosoite:</label>
        <input type="email" id="sahkoposti" value={sahkoposti} onChange={(e) => setSahkoposti(e.target.value)} />
      </div>
      <div>
        <label htmlFor="teksti">Millainen teksti on kyseessä:</label>
        <textarea id="teksti" value={teksti} onChange={(e) => setTeksti(e.target.value)} />
      </div>
      <div>
        <label htmlFor="aikataulu">Toivottu aikataulu:</label>
        <input type="text" id="aikataulu" value={aikataulu} onChange={(e) => setAikataulu(e.target.value)} />
      </div>
      <div>
        <label htmlFor="muuta">Muuta:</label>
        <textarea id="muuta" value={muuta} onChange={(e) => setMuuta(e.target.value)} />
      </div>
      <button type="submit">Lähetä</button>
    </form>
  );
}

export default Yht;