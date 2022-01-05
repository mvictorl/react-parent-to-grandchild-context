import React, { useState } from 'react';
import { Parent } from './components/Parent.jsx';
import { Container } from 'react-bootstrap';
import './style.css';
import { NameContext } from './NameContext';

export default function App() {
  const [name, setName] = useState('');

  return (
    <Container>
      <h2>Parent to GrandChild</h2>

      <NameContext.Provider value={{ name, setName }}>
        <Parent />
      </NameContext.Provider>
    </Container>
  );
}
