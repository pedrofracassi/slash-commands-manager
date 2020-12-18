import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import CommandOption from './CommandOption';

function EditCommand ({ command, setCommand }) {

  return (
    <div>
      <Formik
        initialValues={{
          name: 'blep',
          description: 'Send a random adorable animal photo',
          options: [
            {
              name: 'animal',
              description: 'The type of animal',
              type: 3,
              required: true,
              choices: [
                {
                  name: 'Dog',
                  value: 'animal_dog'
                },
                {
                  name: 'Cat',
                  value: 'animal_dog'
                },
                {
                  name: 'Penguin',
                  value: 'animal_penguin'
                }
              ]
            },
            {
              name: 'only_smol',
              description: 'Whether to show only baby animals',
              type: 5,
              required: false
            }
          ]
        }}
       onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
       }}
     >
       {({ handleChange, values, submitForm }) => (
          <FormikForm>
            <h1>Edit Command</h1>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Options</Form.Label>
                { values.options.map(o => <CommandOption option={o} />) }
              </Form.Group>

              <Button onClick={submitForm}>
                Save
              </Button>
            </Form>
         </FormikForm>
       )}
     </Formik>
   </div>
  );
}

export default EditCommand;
