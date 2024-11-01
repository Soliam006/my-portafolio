import * as React from "react"

// Assuming the supertype is React.HTMLProps<HTMLInputElement>
const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return <input {...props} />;
};

export default Input;