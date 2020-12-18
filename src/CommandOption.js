import React from 'react';
import { Card, Form } from 'react-bootstrap';

function CommandOption ({ option }) {

  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={option.name}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={option.description}
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CommandOption;
