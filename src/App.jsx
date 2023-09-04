import { useState } from 'react'
import { createBrowserRouter,RouterProvider,Route,Outlet, Navigate } from 'react-router-dom';
import gta from "./assets/witcher.png"
import ww from "./assets/witcher1.jpg"
import './App.scss'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import Discover from './pages/Discover/Discover';
import Search from './pages/Search/Search';
import Popular from './pages/Popular/Popular';
import TopRated from './pages/TopRated/TopRated';
import Cats from './pages/Cats/Cats';
import Upcoming from './pages/Upcoming/Upcoming';
import MostPlayed from './pages/MostPlayed/MostPlayed';
import Special from './pages/Special/Special';
function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar />
          <div>
            <Outlet />
          </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/details/:id",
          element:<Details />,
        },
        {
          path:"/discover",
          element:<Discover/>
        },
        {
          path:"/search/:searchTerm",
          element:<Search />,
        },
        {
          path:"/popular",
          element:<Popular />,
        },
        {
          path:"/toprated",
          element:<TopRated />,
        },{
          path:"/cats/:selectedGenre",
          element:<Cats />,
        }
        ,{
          path:"/upcoming",
          element:<Upcoming />,
        }
        ,{
          path:"/mostplayed",
          element:<MostPlayed />,
        },
        {
          path:"/special",
          element:<Special />,
        }
       
      ]
    }
  ])

  return (
   <div>
      <RouterProvider router={router} />
   </div>
  )
}

export default App
