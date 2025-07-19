import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { About, ContactUs, GitHub, Home } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "/contact-us",
          element: <ContactUs/>
        },
        {
          path: "GitHub",
          element:<GitHub/>
        }
      ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
