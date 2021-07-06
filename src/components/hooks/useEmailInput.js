import isEmail from 'validator/lib/isEmail';
import { useState } from 'react';

const useEmailInput = initialValue => {
  const [emailInput, setEmailInput] = useState({
    emailValue: initialValue,
    isEmailValid: initialValue !== '' && isEmail(initialValue),
  });

  const handleEmailInputChange = NewEmailValue =>
    setEmailInput({
      emailValue: NewEmailValue,
      isEmailValid: NewEmailValue !== '' && isEmail(NewEmailValue),
    });

  return { emailInput, handleEmailInputChange };
};

export default useEmailInput;
