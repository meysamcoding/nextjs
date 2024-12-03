'use client';

import Link from 'next/link';
import { useState } from 'react';

const PracticePage = () => {
  const [message, setMessage] = useState('');
  const [numbers, setNumbers] = useState<number[]>([]);
  const [sortedNumbers, setSortedNumbers] = useState<number[]>([]);
  const [uniqueNumbers, setUniqueNumbers] = useState<number[]>([]);
  const [duplicateNumbers, setDuplicateNumbers] = useState<number[]>([]);

  const generateRandomNumbers = () => {
    const randomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 50));
    setNumbers(randomArray);
    setSortedNumbers([]);
    setUniqueNumbers([]);
    setDuplicateNumbers([]);
  };

  const handleClick = () => {
    setMessage('Hello, this is your new Practice');
  };

  const sortNumbers = () => {
    const sorted = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sorted);
  };

  const removeDuplicates = () => {
    const unique = Array.from(new Set(sortedNumbers));
    setUniqueNumbers(unique);
  };

  const findDuplicates = () => {
    const duplicates = numbers.filter((item, index) => numbers.indexOf(item) !== index);
    const uniqueDuplicates = Array.from(new Set(duplicates));
    setDuplicateNumbers([...uniqueDuplicates].sort((a, b) => a - b));
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Practice Page</h1>
      <p className="mt-4">Click the button to see the message:</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Click Me
      </button>
      <Link href="/">
        <button className="mt-4 ml-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Go to Home Page
        </button>
      </Link>
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}

      <h1 className="text-2xl font-bold mb-4 mt-8">Array Utilities Practice</h1>

      <div className="flex gap-4">
        <button
          onClick={generateRandomNumbers}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate Random Numbers
        </button>
        <button
          onClick={sortNumbers}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sort Numbers (Asc)
        </button>
        <button
          onClick={removeDuplicates}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
        >
          Remove Duplicates
        </button>
        <button
          onClick={findDuplicates}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Find Duplicates
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Original Numbers:</h2>
        <p>{numbers.length > 0 ? numbers.join(', ') : 'No numbers generated yet.'}</p>

        <h2 className="text-xl font-bold mt-4">Sorted Numbers:</h2>
        <p>{sortedNumbers.length > 0 ? sortedNumbers.join(', ') : 'Not sorted yet.'}</p>

        <h2 className="text-xl font-bold mt-4">Duplicate Numbers:</h2>
        <p>{duplicateNumbers.length > 0 ? duplicateNumbers.join(', ') : 'No duplicates found yet.'}</p>


        <h2 className="text-xl font-bold mt-4">Unique Numbers:</h2>
        <p>{uniqueNumbers.length > 0 ? uniqueNumbers.join(', ') : 'No unique numbers yet.'}</p>

       
      </div>
    </div>
  );
};

export default PracticePage;
