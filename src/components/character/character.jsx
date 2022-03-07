import React from 'react'
import { Wrapper, Avatar, Imagen, Info } from './styled'

const Character = ({ element }) => {
  return (
    <Wrapper>
      <Avatar>
        <Imagen src={element.image} alt="" />
      </Avatar>
      <Info>
        <p>Nombre: {element.name}</p>
        <p>Especie: {element.species}</p>
        <p>Género: {element.gender}</p>
        <p>Ubicación: {element.location.name}</p>
        <p>Origen: {element.origin.name}</p>
        <p>Estado: {element.status}</p>
      </Info>
    </Wrapper>
  )
}

export default Character