
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Works from './Pages/Works'
import Contact from './Pages/Contact'
import Blogs from './Pages/Blogs'
import LayoutOne from './Layout/LayoutOne'


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
<Route>

 <Route path='/' element = {<LayoutOne/>}>
 <Route path='/home' element = {<Home/>} />
  <Route path='/About' element ={<About/>} />
  <Route path='/resume' element ={<Resume/>} /> 
  <Route path='/works' element ={<Works/>} />
  <Route path='/blogs' element = {<Blogs/>} />
  <Route path='/contact' element ={<Contact/>} />
  
</Route>

 </Route>

 
 
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
