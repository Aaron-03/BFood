import { useState } from 'react';

export const useRegisterProduct = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }
    callback();
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    inputs,
    handleInputChange,
    handleSubmit,
  };
};
