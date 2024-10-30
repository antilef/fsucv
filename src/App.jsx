import { useState } from 'react'
import back from './assets/back.png'
function App() {

  return (
    <div className='flex items-center justify-center h-screen bg-gray-300'> 
      <div className='grid grid-cols-2 gap-20 items-center rounded-r-2xl'>
        <div className='relative'>
            <img src={back} alt="" />
        </div>
        <div className='grid max-w-100'>
          <h1 className='text-4xl'>Bienvenido</h1>
          <p>Ingresa tus datos para acceder a la administracion de tus productos</p>
          <form action="" className='space-y-6'>
            <div className=''>
              <div>
                <i class="fa-solid fa-user"></i>
              </div>
              <label className='block' htmlFor="run">Rut</label>
              <input className='py-1 rounded-full' placeholder='11111111-1' type="text"id='run'></input>
            </div>
            <div className=''>
              <div>
                <i class="fa-solid fa-lock"></i>
              </div>
              <label className='block'  htmlFor="password">Password</label>
              <input className='py-1 rounded-full' type="password"id='password' />
            </div>
            <button className='bg-gradient-to-r from-blue-800 to bg-cyan-300 rounded-full w-80 font-semibold py-2'>Sign in</button>
          </form>
        </div>
      </div>
    </div>
    
  )
}

export default App
