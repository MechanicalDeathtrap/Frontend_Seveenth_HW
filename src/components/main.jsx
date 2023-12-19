import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import App from './App.jsx'
import '../styles/index.css'
import '../styles/main.css'
import WelcomeComponent from "./WelcomeComponent.jsx";
import Header from "./header.jsx";
import Collection from "./Collection.jsx";
import SearchComponent from "./Search.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Header/>,
        children: [
            {
                path: '/welcome-page',
                element: <WelcomeComponent />
            },
            {
                path: '/collection',
                element: <Collection />
            },
            {
                path: '/search',
                element: <SearchComponent/>
            }
        ],
    },
/*    {
        path:'/collection',
        element:<HeaderCollection/>
    }*/
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
{/*      <BrowserRouter>
          <App />
      </BrowserRouter>*/}
  </React.StrictMode>,
)
