'use client';

import { useState, useEffect } from 'react';

export default function Page() {
  const [namesList, setNamesList] = useState<any>([]);
  const [filteredNames, setFilteredNames] = useState<any>([]);

  useEffect(() => {
    const fetchNames = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setNamesList(data))


    };

    fetchNames();
  }, []);


  const sortNames = () => {
    const sorted = [...namesList].sort((a: any, b: any) =>
      a.name.localeCompare(b.name)
    );
    setFilteredNames(sorted);
  };

  const filterByAlphabet = (alphabet: string) => {
    const filtered = namesList.filter((user: any) =>
      user.name.toLowerCase().startsWith(alphabet.toLowerCase())
    );
    setFilteredNames(filtered);
  };
  console.log('meysam', namesList)

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
      </div>
    </div>
  );
}
