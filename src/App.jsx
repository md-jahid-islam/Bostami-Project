
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import LayoutOne from './Layout/LayoutOne'
import Work from './Pages/Work'


function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
<Route>

 <Route path='/' element = {<LayoutOne/>}>
  <Route index element = {<Home/>} />
  <Route path='/About' element ={<About/>} />
  <Route path='/resume' element ={<Resume/>} />
  <Route  path='/work' element = {<Work/>} />
  <Route path='/blog' element = {<Blog/>} />
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
