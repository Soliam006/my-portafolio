// components/ui/textarea.tsx
import React from 'react';

const Textarea: React.FC<React.HTMLProps<HTMLTextAreaElement>> = (props) => {
  return <textarea {...props} />;
};

export default Textarea;