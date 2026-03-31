
// import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Status from './components/Status'
import Steps from './components/Steps'




function App() {
//  const notify = () => toast("Wow so easy!");

  return (
    <>
  <Navbar  /> 
  
  {/* cartCount={cart.length} */}
  <Banner></Banner>
    <Status/>
    <Steps></Steps>
    <Footer></Footer>
    </>
  )
}

export default App
