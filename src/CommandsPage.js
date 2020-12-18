import React from 'react';
import { Card } from 'react-bootstrap';

function CommandsPage ({ option }) {

  return (
    <Card>
      <Card.Body>
        <h3>{option.name}</h3>
        <p>{option.description}</p>
      </Card.Body>
    </Card>
  );
}

export default CommandsPage;
