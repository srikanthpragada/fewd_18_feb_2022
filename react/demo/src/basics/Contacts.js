import React, { useState } from 'react'

export default function Contacts() {
    var [data, setData] = useState([{ name: 'Srikanth', email: 'srikanth@gmail.com', mobile: 9059057000 }])

    function addNewContact(contact) {
        // add new contact to data 
        setData([...data, contact])
        //console.log(data)
    }

    function deleteExistingContact(idx) {
        setData( data.filter( (c,index) => index !== idx))
    }
    
    return (
        <>
            <h2>Contacts</h2>
            <AddContact addContact={addNewContact} />
            <p></p>
            <ListContacts contacts={data} deleteContact={deleteExistingContact} />
        </>
    )
}

function AddContact(props) {
    var [contact, setContact] = useState({ name: "", email: "", mobile: "" })

    function changeValue(event) {
        var name = event.target.name;
        var value = event.target.value;
        setContact({ ...contact, [name]: value })
    }

    function addContact(event) {
        props.addContact(contact)  // invoke function in parent component 
        event.preventDefault()
    }

    return (
        <form onSubmit={addContact}>
            Name <br />
            <input type="text" value={contact.name} required onChange={changeValue} name="name" />
            <p></p>

            Email <br />
            <input type="email" value={contact.email} required onChange={changeValue} name="email" />
            <p></p>

            Mobile <br />
            <input type="text" pattern="[0-9]{10}" value={contact.mobile} onChange={changeValue} name="mobile" />
            <p></p>
            <input type="submit" value="Add Contact" />
        </form>
    )

}

function ListContacts(props) {

    function deleteOneContact(idx) {
        props.deleteContact(idx)
    }

    return (
        <>
            {props.contacts.length > 0 ?
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Mobile</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.contacts.map((c, idx) =>
                                <tr key={idx}>
                                    <td>{c.name}</td>
                                    <td>{c.email}</td>
                                    <td>{c.mobile}</td>
                                    <td className="text-center"><button onClick={() => deleteOneContact(idx)}>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
                : <h5>No contacts available!!</h5>
            }
        </>
    )

}