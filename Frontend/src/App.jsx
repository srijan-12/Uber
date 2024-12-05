import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from './Components/Home'
import { UserLogin } from './Components/UserLogin'
import { UserSignup } from './Components/UserSignup'
import { CaptainLogin } from './Components/CaptainLogin'
import { CaptainSignup } from './Components/CaptainSignup'
import {Provider} from "react-redux"
import { appStore } from './utitities/store'
import { PostLogin } from './Components/PostLogin'
import { PostLoginCaptain } from './Components/PostLoginCaptain'
import { RideStartPage } from './Components/RideStartPage'
import { CaptainRideFinish } from './Components/CaptainRideFinish'
function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<PostLogin/>}/>
          <Route path='/home-captain' element={<PostLoginCaptain/>}/>
          <Route path='/user-login' element={<UserLogin/>}/>
          <Route path='/user-signup' element={<UserSignup/>}/>
          <Route path='/user-ride' element={<RideStartPage/>}/>
          <Route path='/captain-login' element={<CaptainLogin/>}/>
          <Route path='/captain-signup' element={<CaptainSignup/>}/>
          <Route path='/captain-finish-ride' element={<CaptainRideFinish/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
