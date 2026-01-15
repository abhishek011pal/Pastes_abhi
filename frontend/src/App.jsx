import { useState } from 'react'
import {Navbar,Pastes_Form} from './components/imports.js'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-[#161618] w-full min-h-screen p-2'>
        <div className='w-full m-auto md:w-[60%]  '>
          <Navbar/>
          <Pastes_Form/>
        </div>
      </div>
    </>
  )
}

export default App
