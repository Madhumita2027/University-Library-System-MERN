import React, { useState } from 'react'


function BorrowBooks() {

    const [borrowBook, setBorrowBook] = useState({
        student: "",
        grade: "",
        borrowedBookTitle: "",
        borrowingDate: "",
        returnDate: "",
        fine: ""
    })


    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setBorrowBook({
            ...borrowBook,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(borrowBook);
        try {
            const response = await fetch( `http://localhost:3000/v1/borrows`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(borrowBook)
            })
            if(response.ok) {
                setBorrowBook({
                    student: "",
                    grade: "",
                    borrowedBookTitle: "",
                    borrowingDate: "",
                    returnDate: "",
                    fine: ""
                })
            }
            console.log(response);
        } catch (error) {
            console.log("borrow book", error);
        }
    }



    return ( 
        <>
        <h1 className='text-2xl font-semibold text-center text-white p-3 mb-14 shadow-lg bg-blue-600'> Borrowed Books Details </h1>
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="student" 
                    placeholder=" " 
                    required
                    name="student"
                    value={borrowBook.student}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="student" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Student Name </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="number" 
                    id="grade" 
                    placeholder=" " 
                    required
                    name="grade"
                    value={borrowBook.grade}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="grade" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Grade </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="text" 
                    id="title" 
                    placeholder=" " 
                    required
                    name="borrowedBookTitle"
                    value={borrowBook.borrowedBookTitle}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="title" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Book Borrowed </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="date" 
                    id="bdate" 
                    placeholder=" "
                    required
                    name="borrowingDate"
                    value={borrowBook.borrowingDate}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="bdate" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Borrowing Date </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="date" 
                    id="rdate" 
                    placeholder=" "
                    required
                    name="returnDate"
                    value={borrowBook.returnDate}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="rdate" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Return Date </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input 
                    type="number" 
                    id="fine" 
                    placeholder=" "
                    name="fine"
                    value={borrowBook.fine}
                    onChange={handleInput}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                <label 
                    htmlFor="fine" 
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Fine </label>
            </div>
            <button 
                type="submit" 
                onClick={() => window.alert("Data added successfully")}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add Book </button>
        </form>

        </>
     );
    }
    
    
    export default BorrowBooks