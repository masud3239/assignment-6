
// import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Status from './components/Status'




function App() {
//  const notify = () => toast("Wow so easy!");

  return (
    <>
  <Navbar  /> 
  
  {/* cartCount={cart.length} */}
  <Banner></Banner>
    <Status/>
    <Footer></Footer>
    </>
  )
}

export default App
