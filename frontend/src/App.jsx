import React from 'react'
import { Link } from 'react-router-dom'


function App() {

  return (
    <>
      <h1 className='text-3xl font-bold text-center text-white mb-16 p-5 shadow-lg bg-blue-600'> University Library System </h1>
      <div className='mx-28 grid grid-cols-5 gap-6'>
        <Link to='/books'>
          <img src='https://www.frontlist.in/storage/uploads/2021/06/GettyImages-577674005.jpg'
              className='h-32 w-full' />
          <h1 className='bg-orange-200 text-center font-semibold p-4 cursor-pointer hover:bg-orange-300'>Books</h1>                
        </Link> 
        <Link to='/authors'>
          <img src='https://media.licdn.com/dms/image/C4D12AQHWE3Y5pJ17XA/article-cover_image-shrink_600_2000/0/1579010201441?e=2147483647&v=beta&t=-FeNtsgfowZY2_VGLghg4OFynJG21LQIJayGoYDgid4'
              className='h-32 w-full' />
          <h1 className='bg-pink-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-pink-300'>Authors</h1>
        </Link>
        <Link to='/publishers'>
          <img src='https://lp2m.uma.ac.id/wp-content/uploads/2020/10/publikasiilmiah.jpg'
              className='h-32 w-full' />
          <h1 className='bg-blue-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-blue-300'>Publications</h1>
        </Link>
        <Link to='/students'>
          <img src='https://eg5viqwfhsw.exactdn.com/uploads/2021/07/AdobeStock_356426229-scaled.jpeg?strip=all&lossy=1&ssl=1' 
              className='h-32 w-full' />
          <h1 className='bg-green-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-green-300'>Students</h1>
        </Link>
        <Link to='/borrows'>
          <img src='https://libapps-au.s3-ap-southeast-2.amazonaws.com/customers/913/images/Library_Desk_Image.jpg' 
              className='h-32 w-full' />
          <h1 className='bg-red-200 text-center font-semibold p-4 shadow-md cursor-pointer hover:bg-red-300'>Book Borrowed Details</h1>
        </Link>
      </div>
    </>
  )
}


export default App

