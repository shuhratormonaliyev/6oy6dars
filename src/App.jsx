import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyFormData from './components/MyFormData';
function App() {
  return (
    <>
<Navbar/>
<main className='grow'>
  <MyFormData/>
</main>
<Footer/>
    </>
  )
}

export default App