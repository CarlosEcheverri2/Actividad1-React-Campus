import React from 'react'
import { Contacto } from '../../models/contacto.class'

const persona = new Contacto('pitter','Perez','pitter@email.com')

const ComponenteB = ({setContacto,contacto}) => {

    const handleOnclick = () => {
        contacto.conectado = !contacto.conectado
        setContacto({...contacto})
    }

    return (
    <div>
        <button onClick={ ()=>{handleOnclick()}}>Cambiar estado</button>
    </div>
  )
}

export default ComponenteB
