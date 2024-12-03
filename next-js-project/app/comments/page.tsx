'use clinet'

import Link from "next/link";

const CommentPage = () => {


    return (
        <div className="p-8">
            <h1 className="text-2x1 font-bold mb-4">Comment Page</h1>
            <Link href={'/'}>
            <button className="bg-green-600 text-white py-2 mb-4 rounded m-4 p-4 hover:bg-green-500"> Back to Home Page</button>
            </Link>
        </div>
    )
}

export default CommentPage;