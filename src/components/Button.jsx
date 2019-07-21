import React from 'react';
import './Button.css';

// Function tells us if its an operator or not
const isOperator = val => {
  return !isNaN(val) || val === '.' || val === '=';
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children) ? null : 'operator'
    }`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
