'use client'
import { useState, FormEvent } from "react";

export default function Home() {
  const [inputVal, setInputVal] = useState('');


  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

  }
  return (
    <div>

      <h1>Enter your Name</h1>

      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Type your name...."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit"> Grab the Data</button>
      </form>



    </div>



  );
}
