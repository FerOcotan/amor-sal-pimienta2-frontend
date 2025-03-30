import React from 'react'
import {productos as data} from '../data/productos'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'


export default function Inicio() {


  const {categoriaActual} = useQuiosco()

  const productos = data.filter(producto => producto.categoria_id === categoriaActual.id)


  return (
    <>
    
    
    <h1 className='text-4xl font-black text-center'>{categoriaActual.nombre}</h1>

    <p className='text-lg text-center mt-5 mb-10'>
      Elige tu pedido a continuación y personaliza tu orden
    </p>
    

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {productos.map(producto => (
        <Producto
          key={producto.imagen}
          producto={producto}
        />
      ))}
    </div>
    
    
    
    </>
  )
}
