import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import store from './app/store';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import { AllPosts, EditPost, Home, Login, Signup, PostDetail } from './pages';
import AuthenticationLayout from './components/AuthenticationLayout';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path:'/',
      element: (
        <AuthenticationLayout isAuthenticated={false}>
          <Home />
        </AuthenticationLayout>
      )
    },
    {
      path: '/Login',
      element: (
        <AuthenticationLayout isAuthenticated={false}>
          <Login />
        </AuthenticationLayout>
      )
    },
    {
      path: '/Signup',
      element: (
        <AuthenticationLayout isAuthenticated={false}>
          <Signup />
        </AuthenticationLayout>
      )
    },
    {
      path: '/AllPosts',
      element: (
        <AuthenticationLayout isAuthenticated={true}>
          <AllPosts />
        </AuthenticationLayout>
      )
    },
    {
      path: '/PostModification:postID?',
      element: (
        <AuthenticationLayout isAuthenticated={true}>
          <EditPost />
        </AuthenticationLayout>
      )
    },
    {
      path: '/PostDetail:postID',
      element: (
        <AuthenticationLayout isAuthenticated={true}>
          <PostDetail />
        </AuthenticationLayout>
      )
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
