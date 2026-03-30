
// import { ToastContainer, toast } from 'react-toastify'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'




function App() {
//  const notify = () => toast("Wow so easy!");

  return (
    <>
  <Navbar  /> 
  
  {/* cartCount={cart.length} */}
  <Banner></Banner>
    
    </>
  )
}

export default App
