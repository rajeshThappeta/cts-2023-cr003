import "./App.css";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from "./RootLayout";
import Home from './components/home/Home';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Technologies from './components/technologies/Technologies';
import Java from './components/java/Java';
import Nodejs from './components/nodejs/Nodejs';
import Vue from './components/Vue/Vue'



function App() {

  //create browser router obj
  const browserRouterObj=createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:'/',
          element:<Home />
        },
        {
          path:"register",
          element:<Register />
        },
        {
          path:"login",
          element:<Login />
        },
        {
          path:"technologies",
          element:<Technologies />,
          children:[
            {
              path:'java',
              element:<Java />
            },
            {
              path:"nodejs",
              element:<Nodejs />
            },
            {
              path:"vue",
              element:<Vue />
            }
          ]
        }
      ]
    }
  ])

  return (
    <div className="main">
    
      {/* provide  browserRouterObj to app*/}
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;
