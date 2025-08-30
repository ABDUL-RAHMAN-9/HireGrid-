import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import
  {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import ContactLayout from './layout/ContactLayout'
import ContactInfo from './components/ContactInfo'
import ContactForm from './components/ContactForm'
import NotFound from './components/NotFound'
import JobsLayout from './layout/JobsLayout'
import Jobs, { jobsLoader } from './pages/Jobs'
import JobDetails, { jobDetailsLoader } from './components/JobDetails'
import Error from './components/Error'

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
        <Route path='contact' element={<ContactLayout />}>
          <Route path='info' element={<ContactInfo />} />
          <Route path='form' element={<ContactForm />} />
        </Route>

        {/* Jobs route with loader + error handling */}
        <Route path='jobs' element={<JobsLayout />} errorElement={<Error />}>
          <Route
            index
            element={<Jobs />}
            loader={jobsLoader}
            errorElement={<Error />}
          />
          <Route
            path=':id'
            element={<JobDetails />}
            loader={jobDetailsLoader}
            errorElement={<Error />}
          />
        </Route>

        {/* Catch-all route */}
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
