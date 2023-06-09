import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { createBrowserRouter, RouterProvider,Route } from 'react-router-dom'
import { useState, useEffect } from 'react';

import Home from './routes/Home'
import NewPost from './routes/NewPost'
import Comments from './routes/Comments'

import './index.css'



const router = createBrowserRouter(
  [
  
  {
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/new",
      element:<NewPost/>
    },
    {
      path:`/post/:id`,
      element:<Comments/>,

    }
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
