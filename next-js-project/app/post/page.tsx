'use client'

import Link from "next/link";
import { useEffect, useState } from "react";


const postPage = () => {
    const [postData, setPostData] = useState<any>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPostData(data);
            } catch (error) {
                console.error("Error fetching the posts:", error);
            }
        };

        fetchData();
    }, []);



    return (
        <div className="p-8">
            <p>Hello to post page</p>
            <Link href={'/'}>
                <button className="bg-green-600 text-white py-2 mb-4 rounded m-4 p-4 hover:bg-green-500"> Back to Home Page</button>
            </Link>

            <ul className="flex flex-wrap gap-4 p-4">
                {postData.slice(0, 20).map((item: any, index: number) => (
                    <li key={index} className="box rounded text-white bg-blue-500 p-4 max-w-xs overflow-hidden">
                        <strong className="text-red-700">User Id: {item.id}</strong>
                        <div className="truncate text-ellipsis whitespace-nowrap">
                            <strong className="text-black">Title:</strong> {item.title}
                        </div>
                        <div className="truncate text-ellipsis overflow-hidden">
                            <strong className="text-green-500">Body:</strong> {item.body}
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default postPage;