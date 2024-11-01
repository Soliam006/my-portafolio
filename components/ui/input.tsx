// components/ui/input.tsx
import * as React from "react";

const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
  return <input {...props} />;
};

export default Input;