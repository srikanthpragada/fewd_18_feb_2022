import React, { useState, useEffect } from 'react'
import $ from 'jquery'
// import BOOKS_URL from './constants'


import { Link } from "react-router-dom";

export default function ListBooks() {
    const [books, setBooks] = useState([])

    useEffect(function () {
        getBooks();
    }, []
    )

    function getBooks() {
        $.get("http://localhost:8000/books",
            (result) => {
                setBooks(result)
            }
        ) // get
    }
    function deleteBook(id) {
        $.ajax(
            {
                url: `http://localhost:8000/books/${id}`,
                method: 'delete',
                success: function () {
                    alert("Book deleted successfully!")
                    getBooks();
                },
                error: function (error) {
                    console.log(error)
                    alert("Sorry! Could not delete book!")
                }
            }
        )
    }


    return (
        <>
            <h3>List of Books</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book) =>
                            <tr key={book.id}>
                                <td>{book.title} </td>
                                <td className="text-center" style={{ width: '20%' }}>
                                    <button onClick={() => deleteBook(book.id)}
                                        className="btn btn-danger">Delete</button>
                                    &nbsp;
                                    <Link to={`/details/${book.id}`}
                                        className="btn btn-info">Details</Link>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
