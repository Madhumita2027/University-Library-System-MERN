import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Books from './components/Book.jsx'
import Author from './components/Author.jsx'
import Publisher from './components/Publisher.jsx'
import Student from './components/Student.jsx'
import BorrowBooks from './components/Borrow.jsx'
import ShowBooks from './components/ShowBooks.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout /> ,
    children: [
      {
        path: "",
        element: <App />
      },
      {
        path: "books",
        element: <Books />,
        children: [
          {
            path: "showBooks",
            element: <ShowBooks />
          }
        ]
      },
      {
        path: "authors",
        element: <Author />
      },
      {
        path: "publishers",
        element: <Publisher />
      },
      {
        path: "students",
        element: <Student />
      },
      {
        path: "borrows",
        element: <BorrowBooks />
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
