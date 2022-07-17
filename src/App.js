import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CardContact from './components/CardContact';
import ContactDetails from './components/ContactDetails';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header'
import useFetch from './components/useFetch';



function App() {

  const { users } = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<CardContact users={users} />}/>
          <Route path='/contact/:id' element={
            <div className='flex justify-center'><ContactDetails /> </div>
          } />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
