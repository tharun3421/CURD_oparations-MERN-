
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import Create from './Create'
import Update from './Update'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
