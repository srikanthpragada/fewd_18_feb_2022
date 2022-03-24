import React, { useState } from 'react'
import $ from 'jquery'
import { BOOKS_URL } from './constants'

export default function AddBook() {
  let [book, setBook] = useState({ title: "", author: "", price: 0 })

  function addBook(event) {
    // make ajax request for post 
    $.ajax(
      {
        url: BOOKS_URL,
        method: 'post',
        data: book,
        success: function () {
          alert("Book added successfully!")
        },
        error: function (error) {
          console.log(error)
          alert("Sorry! Could not add book!")
        }
      }
    )
    // Clear textboxes by resetting book object 
    setBook({ title: "", author: "", price: 0 })
    event.preventDefault()
  }

  function changeValue(event) {
    var name = event.target.name;
    var value = event.target.value;
    setBook({ ...book, [name]: value })
  }


  return (
    <>
      <h3>Add New Book</h3>

      <form onSubmit={addBook}>
        Title <br />
        <input type="text" value={book.title} required onChange={changeValue} name="title" />
        <p></p>

        Author <br />
        <input type="text" value={book.author} required onChange={changeValue} name="author" />
        <p></p>

        Price <br />
        <input type="number" value={book.price} onChange={changeValue} name="price" />
        <p></p>
        <input type="submit" value="Add Book" />
      </form>
    </>
  )
}
