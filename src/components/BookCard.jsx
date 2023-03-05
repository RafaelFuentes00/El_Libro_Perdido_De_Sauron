import React from 'react'

const BookCard = (props) => {
  return (
    <div>
        <img src={`/img/books/${props.img}`} alt="" />
        <p>{props.titulo}</p>
        <p>{props.descripcion}</p>
        <p>{props.precio}€</p>
        <hr />
    </div>
  )
}

export default BookCard