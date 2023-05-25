'use client';

import { useRef, useState } from 'react';
import { Flex, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

const Decode = () => {
  const encodedStringRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState('');
  const [result, setResult] = useState({});

  const decodeInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const inputValue = encodedStringRef.current?.value || '';
    console.log(inputValue);

    if (!inputValue) {
      return setError('Please insert a value');
    }

    let separatorCount = 0;
    let prev = '';

    const result: Array<string> = ['', '', ''];

    for (const i of inputValue) {
      if (i === '0') {
        if (separatorCount === 2 && result[separatorCount] !== '') {
          // Check if it's first zeros to ignore
          result[separatorCount] += i;
        } else {
          if (prev !== '0') {
            separatorCount++;
          }
        }
        prev = i;
      } else {
        result[separatorCount] += i;
        if (prev === '0') {
          prev = '';
        }
      }
    }

    const [first_name, last_name, id] = result;
    if (result.filter((r) => r !== '').length < 3) {
      setResult({});
      setError('Invalid format');
      return;
    }

    setResult({ first_name, last_name, id });
    setError('');
  };

  return (
    <Flex flex={1} alignItems="center">
      <Stack as="form" onSubmit={decodeInput} w="full" spacing={4}>
        <FormControl>
          <FormLabel>Encoded String</FormLabel>
          <Input placeholder="Put here your encoded string" type="text" ref={encodedStringRef} />
        </FormControl>
        <Button type="submit" colorScheme="red">
          Decrypt Input
        </Button>
        {error && <div>Error: {error}</div>}
        <Text fontSize="2xl">Decrypted message: {Object.keys(result).length >= 3 && JSON.stringify(result)}</Text>
      </Stack>
    </Flex>
  );
};

export default Decode;
