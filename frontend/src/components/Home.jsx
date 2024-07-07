import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    return ( 
        <>
            <h1 className='text-3xl font-bold text-center text-white mb-16 p-5 shadow-lg bg-blue-600'> University Library System </h1>
            <div className='mx-40 grid grid-cols-3 gap-12'>
                <Link to='/books'>
                    <img src='https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg'
                    className='h-32 w-full' />
                    <h1 className='bg-orange-200 text-center font-semibold p-4 cursor-pointer hover:bg-orange-300'>Books</h1>                
                </Link> 
                <Link to='/students'>
                    <img src='https://eg5viqwfhsw.exactdn.com/uploads/2021/07/AdobeStock_356426229-scaled.jpeg?strip=all&lossy=1&ssl=1' 
              className='h-32 w-full' />
                    <h1 className='bg-green-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-green-300'>Students</h1>
                </Link>
                <Link to='/books-borrow'>
                    <img src='https://libapps-au.s3-ap-southeast-2.amazonaws.com/customers/913/images/Library_Desk_Image.jpg' 
              className='h-32 w-full' />
                    <h1 className='bg-red-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-red-300'>Book Borrowed Details</h1>
                </Link>
            </div>
        </>
     );
}

export default Home;