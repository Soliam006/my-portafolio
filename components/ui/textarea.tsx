// components/ui/textarea.tsx
import React from 'react';

// Assuming the supertype is React.HTMLProps<HTMLTextAreaElement>
const Textarea: React.FC<React.HTMLProps<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} />;
};

export default Textarea;