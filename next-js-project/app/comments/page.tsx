'use client'

import Link from "next/link";
import { useState } from "react";

const CommentPage = () => {
    const [todo, setTodo] = useState<any>([])

    const handleClick = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json();
        setTodo(data);
        console.log('meysam', data)


    }


    return (
        <div className="p-8">
            <h1 className="text-2x1 font-bold mb-4">Comment Page</h1>
            <Link href={'/'}>
                <button className="bg-green-600 text-white py-2 mb-4 rounded m-4 p-4 hover:bg-green-500"> Back to Home Page</button>
            </Link>

            <button className="bg-green-900 py-2 mb-4 p-4 text-white rounded hover:bg-red-500" onClick={handleClick}>Fetch todo list</button>
            <ul className="flex flex-wrap gap-4 p-4 ">
                {todo.slice(0, 20).map((item: any, index: any) => {
                    return <div key={index} className="box p-4 m-4 border-gray-300 rounded shadow-md hover:bg-red-500">

                        <li className="text-blue-700"><strong>Item Title:</strong> {item.title}</li>
                        <li className='text-red-400'><strong> item Id:</strong> {item.id}</li>
                        <li className="text-green-600"><strong>item Complete:</strong> {item.completed ? 'Yes' : 'No'}</li>
                        <li><strong>item userId:</strong> {item.userId}</li>
                    </div>
                })}
            </ul>

        </div>
    )
}

export default CommentPage;