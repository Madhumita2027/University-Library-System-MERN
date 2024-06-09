import React, { useState } from 'react';


function Author() {

    const [author, setAuthor] = useState({
        authorName: "",
        biography: "",
        bookWritten: ""
    })

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setAuthor({
            ...author,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(author);
        try {
            const response = await fetch( `http://localhost:3000/v1/authors`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(author)
            })
            if(response.ok) {
                setAuthor({
                    authorName: "",
                    biography: "",
                    bookWritten: ""
                })
            }
            console.log(response);
        } catch (error) {
            console.log("author", error);
        }
    }



    return ( 
        <>
            <h1 className='text-2xl font-semibold text-center text-white p-3 mb-14 shadow-lg bg-blue-600'> Authors Details </h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="authorName" 
                    placeholder=" " 
                    required
                    name="authorName"
                    value={author.authorName}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="authorName" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Author Name </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="bio" 
                    placeholder=" " 
                    required
                    name="biography"
                    value={author.biography}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="bio" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Biography </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="book" 
                    placeholder=" "
                    name="bookWritten"
                    value={author.bookWritten}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="book" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Book Written </label>
            </div>
            <button 
                type="submit" 
                onClick={() => window.alert("Data added successfully")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add Author </button>
        </form>
        </>
     );
}

export default Author;