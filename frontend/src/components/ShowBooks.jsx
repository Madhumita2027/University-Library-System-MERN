import React from 'react';

function ShowBooks() {
    return ( 

            <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-blue-500 dark:text-blue-400">
            <thead className="text-xs text-blue-700 uppercase bg-blue-50 dark:bg-blue-700 dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        ISBN
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Book Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Genre
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Author
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Publisher
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Publication Date
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       12345678 
                    </th>
                    <td className="px-6 py-4 text-white">
                        Atomic Habits
                    </td>
                    <td className="px-6 py-4 text-white">
                        Motivational
                    </td>
                    <td className="px-6 py-4 text-white">
                        James Clear
                    </td>
                    <td className="px-6 py-4 text-white">
                        Penguin India
                    </td>
                    <td className="px-6 py-4 text-white">
                        
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                       23579113 
                    </th>
                    <td className="px-6 py-4 text-white">
                        Secret
                    </td>
                    <td className="px-6 py-4 text-white">
                        Self Help
                    </td>
                    <td className="px-6 py-4 text-white">
                        Author 1
                    </td>
                    <td className="px-6 py-4 text-white">
                        Penguin India
                    </td>
                    <td className="px-6 py-4 text-white">
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
     );
}

export default ShowBooks;