import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { UserLogin } from './Components/UserLogin'
import { UserSignup } from './Components/UserSignup'
import { CaptainLogin } from './Components/CaptainLogin'
import { CaptainSignup } from './Components/CaptainSignup'
function App() {

  return (
    <>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/user-signup' element={<UserSignup/>}/>
          <Route path='/captain-login' element={<CaptainLogin/>}/>
          <Route path='/captain-signup' element={<CaptainSignup/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
