import { Link } from 'react-router-dom'
import Login from 'src/assets/undraw.svg'


function LoginPage(){
    return (
        
      <div className='flex flex-col lg:flex-row lg:gap-8 items-center m-auto justify-center h-screen '> 
            <div>
                <img src={Login} alt="" />
            </div>
            <div className='flex flex-col justify-center bg-gray-100 rounded-lg px-10 py-20'>
              <h1 className='text-5xl text-center'>Bienvenido</h1>
              <p className='text-center text-lg w-full p-4 m-4'>Ingresa tus datos para acceder a la administracion de tus productos</p>
              <form className='flex  flex-col space-y-6 items-center'>
                <div>
                    <div className='flex gap-2'>
                        <i className="fa-solid fa-user"></i>
                        <label className='block' htmlFor="run">Rut</label>
                    </div>             
                    <input className='py-1 px-2 rounded-full' placeholder='11111111-1' type="text"id='run'></input>
                </div>
                <div>
                  <div className='flex gap-2'>
                    <i className="fa-solid fa-lock"></i>
                    <label className='block'  htmlFor="password">Password</label>
                  </div>   
                  <input className='py-1 px-2 rounded-full' type="password"id='password' />
                </div>
                <button className='bg-secondary  text-white  font-bold rounded-full w-60  py-2'>Sign in</button>
              </form>
              <div className='text-zinc flex flex-col items-center  pt-4 space-y-4 text-lg'>
                <p>No tienes una cuenta? <Link to="signup">registrar</Link></p>
                <p>Olvidaste tu contrasena? <a href="">Reset password</a></p>
              </div>

            </div>
            
        </div>
    )
}
export default LoginPage    