import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import { About, ContactUs, GitHub, Home, User } from './components/index.js'
import GitHubDataFetch from './components/github/GithubDataFetch.js'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//         {
//           path: "",
//           element: <Home/>
//         },
//         {
//           path: "about",
//           element: <About/>
//         },
//         {
//           path: "contact-us",
//           element: <ContactUs/>
//         },
//         {
//           path: "GitHub",
//           element:<GitHub/>,
//           loader: ()=>{
//             return GitHubDataFetch();
//           }
//         }
//       ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='GitHub' element={<GitHub/>}
      loader={GitHubDataFetch}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
