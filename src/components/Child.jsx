import React from 'react';
import { GrandChild } from './GrandChild';

export const Child = () => {
  return (
    <div className="child-box">
      <p>
        <i>Child component</i>
      </p>

      <GrandChild />
    </div>
  );
};
