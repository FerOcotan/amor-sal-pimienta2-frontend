
import {Outlet} from 'react-router-dom'

export default function Authlayout() {
  return (
    <main
    className='max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center justify-center gap-10 p-5 md:p-0'
    >
      <img src='../img/logo.svg' alt="" 
      className='max-w-xs'  
      />
     
      <div className='p-10 w-full'>

      <Outlet/>
      </div>
    </main>
  )
}
