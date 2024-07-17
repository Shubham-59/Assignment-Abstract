// src/components/TitleUpdater.js
import React, { useState, useEffect, useRef } from 'react';

const TitleUpdater = () => {
  const [variableD, setVariableD] = useState('');
  const [initialRender, setInitialRender] = useState(true);
  const previousValueD = useRef(variableD);

  // 1) Only the first time
  useEffect(() => {
    if (initialRender) {
      document.title = variableD;
      setInitialRender(false);
    }
  }, [initialRender, variableD]);

  // 2) On every page render
  useEffect(() => {
    document.title = variableD;
  });

  // 4) Only when the value of variable D changes
  useEffect(() => {
    if (previousValueD.current !== variableD) {
      document.title = variableD;
      previousValueD.current = variableD;
    }
  }, [variableD]);

  const handleChange = (e) => {
    setVariableD(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={variableD}
        onChange={handleChange}
        placeholder="Enter a value"
      />
      <button onClick={() => setVariableD(variableD)}>
        Update Title
      </button>
    </div>
  );
};

export default TitleUpdater;
