import React, { useState } from 'react';

function App() {
  const [tech, setTech] = useState([
    'ReactJS',
    'React Native'
  ]);

  const [newTech, setNewTech] = useState([]);

  function adicionaTech() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        {tech.map(t =>
          <li key={t}>{t}</li>
        )}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={adicionaTech}>Adicionar</button>
    </>
  );
}

export default App;
