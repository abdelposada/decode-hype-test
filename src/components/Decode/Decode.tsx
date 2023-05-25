'use client';

import { useRef, useState } from 'react';

const Decode = () => {
  const encodedStringRef = useRef<HTMLInputElement | null>(null);
  const [result, setResult] = useState({});

  const decodeInput = () => {
    const inputValue = encodedStringRef.current?.value || '';
    const [first_name, last_name, id] = inputValue.split(/0+/g);
    setResult({ first_name, last_name, id });
  };

  return (
    <div>
      <input type="text" ref={encodedStringRef} />
      <button onClick={decodeInput}>Decrypt Input</button>
      <div>Decrypted message: {Object.keys(result).length >= 3 && JSON.stringify(result)}</div>
    </div>
  );
};

export default Decode;
