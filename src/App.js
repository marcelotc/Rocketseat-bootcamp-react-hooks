import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);

  const [newTech, setNewTech] = useState([]);

  /*Substitui a function que tinha aqui, o adicionaTech
  só irá ser executado quando newTech ou tech forem alterados*/
  const adicionaTech = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);
  /*useMemo utilizado para fazer cálculos de alguma coisa dentro do render
  baseado em alterações de outras variáveis*/

  return (
    <>
      <ul>
        {tech.map(t =>
          <li key={t}>{t}</li>
        )}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)}></input>
      <button type="button" onClick={adicionaTech}>Adicionar</button>
    </>
  );
}

export default App;
