import Home from './pages/Home'
import About from './pages/About'
import Discover from './pages/Discover'
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
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='discover' element={<Discover />} />
        <Route path='about' element={<About />} />

        {/* Contact route with nested routing - This is now correct */}
        <Route path='contact' element={<ContactLayout />}>
          {/* Add an index route to default to ContactInfo */}
          <Route index element={<ContactInfo />} />
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

        <Route path='*' element={<NotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App