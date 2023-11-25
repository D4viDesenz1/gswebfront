import {  } from 'react'
import { Outlet } from 'react-router-dom'
import Nav from './componentes/Nav'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/scrollbar';

function App() {

  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default App