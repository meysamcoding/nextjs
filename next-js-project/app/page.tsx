'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export default function Page() {
  const [namesList, setNamesList] = useState([]);
  const [filteredNames, setFilteredNames] = useState([]);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setNamesList(data));
      console.log('meysam', response)

    };
    fetchNames();
  }, []);


  const sortNames = () => {
    const sorted = [...namesList].sort((a: User, b: User) =>
      a.name.localeCompare(b.name)
    );
    setFilteredNames(sorted);
  };

  const filterByAlphabet = (alphabet: string) => {
    const filtered = namesList.filter((user: User) =>
      user.name.toLowerCase().startsWith(alphabet.toLowerCase())
    );
    setFilteredNames(filtered);
  };

  return (

    <div className="relative p-8">
      {/* Sort Button: Positioned at the top-right */}
      <div className="absolute top-4 right-4">
        <button
          onClick={sortNames}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Sort Names by Alphabet
        </button>
      </div>

      {/* Main Content */}

      <div className="py-5 flex-col md:flex-row gap-8">
        {/* Left Side: Buttons */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Filter by Alphabet</h1>
          <div className="flex flex-wrap gap-2">
            {[...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((letter) => (
              <button
                key={letter}
                onClick={() => filterByAlphabet(letter)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {letter}
              </button>
            ))}
          </div>
          <button
            onClick={() => setFilteredNames(namesList)}
            //mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition
            className="mt-4 bg-red-500 text-white rounded hover:bg-gray-600"
          >
            Show All
          </button>
        </div>

        {/* Right Side: Filtered Names */}
        <div className="flex-1 py-5">
          <h1 className="text-2xl font-bold">Filtered Names</h1>
          <ol className="list-decimal pl-5 mt-4">
            {filteredNames.map((user: any) => (
              <li key={user.id} className="text-lg">
                {user.name}
              </li>
            ))}

          </ol>
        </div>
        <div className="p-8">
          <p className="mt-4">Navigate to the new practice page:</p>
          <Link href="/practice">
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Go to Practice Page
            </button>
          </Link>
        </div>
        <div className="p-8">
          <p className="mt-4">Navigate to the new Comment page:</p>
          <Link href="/comments">
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Go to Practice Page
            </button>
          </Link>
        </div>
        <div className="p-8">
          <p className="mt-4">Navigate to the new Post page:</p>
          <Link href="/post">
            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
              Go to Practice Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
