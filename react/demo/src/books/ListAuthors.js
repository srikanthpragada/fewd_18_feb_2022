import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import { AUTHORS_URL } from './constants'

export default function ListAuthors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        $.get(AUTHORS_URL,
            (result) => {
                setAuthors(result)
            }
        ) // get
    }, []
    )


    return (
        <>
            <h3>Authors</h3>
            <div className="row">
                {authors.map((author) =>
                    <div key={author.id} className="col border bg-light m-3" >
                        <div className="p-3 text-center">
                            <h3> {author.name} </h3>
                            <h4> {author.email}</h4>
                        </div>
                    </div>
                )
                }
            </div>

        </>
    )
}
