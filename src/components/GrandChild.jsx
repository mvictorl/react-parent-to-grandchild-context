import React, { useContext } from 'react';
import { NameContext } from '../NameContext';

export const GrandChild = () => {
  const contextVal = useContext(NameContext);

  return (
    <div className="grand-child-box">
      <p>
        <i>Grand Child component</i>
      </p>
      <span>Name is: {contextVal.name}</span>
    </div>
  );
};
