import React, { useContext } from 'react';
import { Child } from './Child';
import Form from 'react-bootstrap/Form';
import { NameContext } from '../NameContext';

export const Parent = () => {
  const contextVal = useContext(NameContext);

  const handleNameChange = (event) => {
    contextVal.setName(event.target.value);
  };

  return (
    <div className="parent-box">
      <h3>Parent component</h3>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={handleNameChange}
          ></Form.Control>
        </Form.Group>
      </Form>

      <Child />
    </div>
  );
};
