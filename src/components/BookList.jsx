import React from 'react'
import BookCard from './BookCard'
const BookList = ({books}) => {
  return (
    <>
    {
        books.map((e)=><BookCard key={e.id} {...e}/>)
    }
    </>
  )
}

export default BookList