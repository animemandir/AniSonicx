import { useRoutes } from 'react-router-dom';
import Home from './pages/Home'
import Search from './pages/Search'
import Details from './pages/Details'
import Watch from './pages/Watch'
import Navbar from './components/Navbar';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/search', element: <Search /> },
  { path: '/anime/:animeId', element: <Details /> },
  { path: '/watch/:episodeId', element: <Watch /> },
]

function App() {
  const components = useRoutes(routes)

  return (
    <>
      <Navbar />
      <div className='px-2 laptop:px-0'>
        {components}
      </div>
    </>
  )
}

export default App
