import isEmail from 'validator/lib/isEmail';
import { useState } from 'react';

export type UseEmailInputType = {
  emailInput: {
    emailInput: string;
    isEmailValid: boolean;
  };
  handleEmailInputChange: (NewEmailValue: string) => void;
};

const useEmailInput = (initialValue: string) => {
  const [emailInput, setEmailInput] = useState({
    emailValue: initialValue,
    isEmailValid: initialValue !== '' && isEmail(initialValue),
  });

  const handleEmailInputChange = (NewEmailValue: string) =>
    setEmailInput({
      emailValue: NewEmailValue,
      isEmailValid: NewEmailValue !== '' && isEmail(NewEmailValue),
    });

  return { emailInput, handleEmailInputChange };
};

export default useEmailInput;
