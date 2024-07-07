import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Book from '../src/components/Book.jsx'
import Student from '../src/components/Student.jsx'
import Borrow from '../src/components/Borrow.jsx'
import Home from '../src/components/Home.jsx'
import ShowBooks from './components/ShowBooks.jsx'
import EditBook from './components/EditBook.jsx'
import DeleteBook from './components/DeleteBook.jsx'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<Book />} />
        <Route path='/books/details' element={<ShowBooks />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/delete/:id' element={< DeleteBook/>} />
        <Route path='/students' element={<Student />} />
        <Route path='/books/borrow' element={<Borrow />} />
      </Routes>
    </>
  )
}


export default App

