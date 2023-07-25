import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import './styles/App.css'
import Login from './components/Login'
import Counter from './components/Counter'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App