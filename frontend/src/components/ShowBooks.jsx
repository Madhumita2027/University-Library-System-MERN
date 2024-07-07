import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'


function ShowBooks() {

    const [books, setBooks] = useState([])

    const entriesArray = Object.entries(books);

    useEffect( () => {
        axios
        .get('/books/details')
        .then((response) => {
            setBooks(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])



    return ( 
        <div className='p-4'>
            <h1>Book Details</h1>
            <div className='flex justify-between items-center'>
                <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr>
                            <th className='border border-slate-600 rounded-md'>
                                ISBN
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Title
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Genre
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Author
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Publisher
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Publication Date
                            </th>
                            <th className='border border-slate-600 rounded-md'>
                                Operations
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entriesArray.map((book) => (
                                <tr key={book._id} className='h-8'>
                                    <td className='border border-slate-700 rounded-md'>{book.ISBN}</td>
                                    <td className='border border-slate-700 rounded-md'>{book.title}</td>
                                    <td className='border border-slate-700 rounded-md'>{book.genre}</td>
                                    <td className='border border-slate-700 rounded-md'>{book.author}</td>
                                    <td className='border border-slate-700 rounded-md'>{book.publisher}</td>
                                    <td className='border border-slate-700 rounded-md'>{book.publicationDate}</td>
                                    <td className='flex justify-evenly border border-slate-700 rounded-md'>
                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-2xl text-yellow-600'/>
                                        </Link>
                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-2xl text-red-600'/>
                                        </Link>
                                    </td>
                                </tr>    
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default ShowBooks;