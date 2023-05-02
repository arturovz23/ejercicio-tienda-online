import React from 'react'
import Productos from './Productos'

function Tienda({productos, agregarProductoAlCarrito}) {
  return (
    <div>
        <Productos productos={productos} agregarProductoAlCarrito={agregarProductoAlCarrito}/>
    </div>
  )
}

export default Tienda