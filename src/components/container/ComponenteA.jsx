import React, { useState } from 'react'
import { Contacto } from '../../models/contacto.class'
import ComponenteB from '../pure/ComponenteB'

const persona = new Contacto('Jose','Perez','perez@email.com')


const ComponenteA = () => {

    const [contacto,setContacto] = useState(persona)

  return (
    <div>
        <div>
            Nombre: {contacto.nombre}
        </div>
        <div>
            Apellido: {contacto.apellido}
        </div>
        <div>
            Correo: {contacto.email}
        </div>
        <div>
            Estado: {contacto.conectado ? 'Conectado' : 'Desconectado'}
        </div>
        <ComponenteB setContacto={setContacto} contacto={contacto}/>

    </div>
  )
}

export default ComponenteA