import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import CommandsPage from './CommandsPage';
import TokenPage from './TokenPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import EditCommand from './EditCommand';

function App() {
  const [ token, setToken ] = useState('')

  return (
    <Container>
      <Card>
        <Card.Body>
          { token ? <CommandsPage/>: <TokenPage setToken={setToken} /> }
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <EditCommand/>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default App;