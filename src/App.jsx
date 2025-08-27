import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'

const App = () =>
{
  // Define all routes using React Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Root layout wraps all routes (Navbar, Footer, etc.)
      <Route path='/' element={<RootLayout />}>

        {/* Default route -> Home page */}
        <Route index element={<Home />} />

        {/* Other top-level routes */}
        <Route path='products' element={<Product />} />
        <Route path='about' element={<About />} />

        {/* Contact route with nested routing */}
        <Route path='contact' element={<ContactLayout />} >
          {/* Nested routes inside Contact */}
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>
      </Route>
    )
  )

  return (
    <div>
      {/* Provide the router to the application */}
      <RouterProvider router={router} />
    </div>
  )
}

export default App
