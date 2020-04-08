import React from 'react';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import TestComponent from './components/TestComponent.js';

function App() {
  return (
    <>
      <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
      <Button variant="link">Link</Button>
    </>
  );
}

export default App;
