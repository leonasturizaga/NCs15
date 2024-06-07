import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Input = ({ className, label, type, value, onChange }) => {
  const { nick } = useContext(UserContext);
  return (
    <div  className={className}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default Input