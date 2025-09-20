import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';



function App() {
  
  return (
    <div>
      <h1 className='font-manrope font-[400] text-[40px] text-[#4B4B4B] my-[10px] w-[1440px] mx-auto px-4'>Sprint hero</h1>
      <div className='w-[1440px] mx-auto px-4 h-[6350px] bg-[#000000] text-white'>
        <Navbar/>
        <Main/>
      </div>
    
     
    </div>
  )
}

export default App
