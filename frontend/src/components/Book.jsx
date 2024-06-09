import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ShowBooks from './ShowBooks.jsx'
import { Link } from 'react-router-dom'



function Books() {

    const [book, setBook] = useState({
        ISBN: "",
        title: "",
        genre: "",
        author: "",
        publisher: "",
        publicationDate: ""
    })

    const [showBooks, setShowBooks] = useState({})

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setBook({
            ...book,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(book);
        try {
            const response = await fetch( `http://localhost:3000/v1/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(book)
            })
            if(response.ok) {
                setBook({
                    ISBN: "",
                    title: "",
                    genre: "",
                    author: "",
                    publisher: "",
                    publicationDate: ""
                })
            }
            console.log(response);

        } catch (error) {
            console.log("book", error);
        }
    }




    return ( 
        <>
        <h1 className='text-2xl font-semibold text-center text-white p-3 mb-14 shadow-lg bg-blue-600'> Books Details </h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="number" 
                    id="isbn" 
                    placeholder=" " 
                    required
                    name="ISBN"
                    value={book.ISBN}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="isbn" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> ISBN </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="title" 
                    placeholder=" " 
                    required
                    name="title"
                    value={book.title}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="title" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Book Title </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="genre" 
                    placeholder=" "
                    name="genre"
                    value={book.genre}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="genre" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Genre </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="author" 
                    placeholder=" " 
                    required
                    name="author"
                    value={book.author}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="author" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Author </label>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="text" 
                        id="publisher" 
                        placeholder=" " 
                        required
                        name="publisher"
                        value={book.publisher}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                         />
                    <label 
                        htmlFor="publisher" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Publisher </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="date" 
                        id="date" 
                        placeholder=" "
                        name="publicationDate"
                        value={book.publicationDate}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                         />
                    <label 
                        htmlFor="date" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Publication Date </label>
                </div>
            </div>
            <button 
                type="submit" 
                onClick={() => window.alert("Data added successfully")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add Book </button>
        </form>
        <Link to='/show-books'>
            <button 
                type="submit" 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Show all Books </button>
        </Link>

        <br/>
        <br/>
        <br/>
        {/* <ShowBooks/> */}
        
        </>
     );
    }
    
    
    export default Books;