import { Formik, Form as FormikForm } from 'formik';
import React from 'react';
import { Button, Form } from 'react-bootstrap';



function TokenPage ({ setToken, setGuildId }) {

  return (
    <div>
      <Formik
        initialValues={{
          token: '',
          guild_id: ''
        }}
       onSubmit={(values, { setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2))
       }}
     >
       {({ handleChange, values, submitForm, isSubmitting }) => (
          <FormikForm>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Bot Token</Form.Label>
                <Form.Control
                  name="token"
                  value={values.token}
                  onChange={handleChange}
                  placeholder="Gg548jgWUDYHYrhjtrthjjs.h8nmhH.YHRFHT5ygh65usddfgh-Kobvr0agMTY"
                />
                <Form.Text className="text-muted">
                  We won't steal your token, I promise.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Guild ID</Form.Label>
                <Form.Control
                  name="guild_id"
                  value={values.guild_id}
                  onChange={handleChange}
                  placeholder="753825230568554506"
                />
                <Form.Text className="text-muted">
                  Enter this if you want to load commands from a specific guild
                </Form.Text>
              </Form.Group>
              <Button disabled={isSubmitting} variant="primary" onClick={submitForm}>
                Load commands
              </Button>
            </Form>
         </FormikForm>
       )}
     </Formik>
    </div>
  );
}

export default TokenPage;
