

import React, { useState, useEffect } from 'react'
import $ from 'jquery'


export default function ListAuthors() {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        $.get("http://localhost:8000/authors",
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
                        <div className="p-3 ">
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
