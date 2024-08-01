import React, { useState } from 'react';

const CopyClipboard = ({ code }) => {
  const [copy, setCopy] = useState('Copy');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
        setCopy('Copied!'); 
        setTimeout(() => setCopy('Copy'), 2000); 
    }, (err) => {
        console.error('Failed: ', err);
    });
  };

  return (
    <button onClick={copyToClipboard} className='absolute top-0 right-0 bg-purple-800 hover:bg-purple-900 text-white py-2 px-6 rounded-xl duration-200'>
        <h1 className='text-xs md:text-base'>{copy}</h1>
    </button>
  );
};

export default CopyClipboard;
