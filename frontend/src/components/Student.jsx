import React, { useState } from 'react';


function Student() {

    const [student, setStudent] = useState({
        studentName: "",
        email: "",
        contact: "",
        address: ""
    })

    const handleInput = (e) => {
        let name = e.target.name
        let value = e.target.value

        setStudent({
            ...student,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(student);
        try {
            const response = await fetch( `http://localhost:3000/v1/students`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            })
            if(response.ok) {
                setStudent({
                    studentName: "",
                    email: "",
                    contact: "",
                    address: ""
                })
            }
            console.log(response);
        } catch (error) {
            console.log("student", error);
        }
    }



    return ( 
        <>
            <h1 className='text-2xl font-semibold text-center text-white p-3 mb-14 shadow-lg bg-blue-600'> Student Details </h1>
            <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="text" 
                        id="studentName" 
                        placeholder=" " 
                        required
                        name="studentName"
                        value={student.studentName}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                    <label 
                        htmlFor="studentName" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Student Name </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="text" 
                        id="email" 
                        placeholder=" " 
                        required
                        name="email"
                        autoComplete="off"
                        value={student.email}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                    <label 
                        htmlFor="email" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Email </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="number" 
                        id="contact" 
                        placeholder=" "
                        required
                        name="contact"
                        autoComplete="off"
                        value={student.contact}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                    <label 
                        htmlFor="contact" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Contact </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input 
                        type="text" 
                        id="address" 
                        placeholder=" " 
                        name="address"
                        autoComplete="off"  
                        value={student.address}
                        onChange={handleInput}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                     />
                    <label 
                        htmlFor="address" 
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Address </label>
                </div>
                <button 
                    type="submit" 
                    onClick={() => window.alert("Data added successfully")}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> Add Student </button>
            </form>
        </>
     );
}

export default Student;