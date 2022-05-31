import React, { useEffect, useState } from 'react'

export default function Table() {
    const [table, setTable] = useState([])
    const [list, setList] = useState([table])
    useEffect(() => {
        let response = fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
        let result = response.then((data) => setTable([...data]))

    })

    let filterItem = (eleItem) => {
        let updated = table.filter((curItem) => {
            if (eleItem % 2 == 0) {
                return curItem
            }
            else {
                return curItem
            }
            setTable(updated)
        }
        
        )

    }
    return (
        <div>
            <h2 >table</h2>
            <button onClick={() => filterItem("id")}>even items</button>
            <button onClick={() => filterItem("id ")}>odd items</button>


            <table>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>username</th>
                    <th>address</th>
                </tr>
                {table.map((val, key) => {
                    return (
                        <tr key={val.id}>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.username}</td>
                            <td>{[val.address.street]}</td>
                            <td>{val.url}</td>
                        </tr>
                    )
                })}
            </table>


        </div>
    )
}
