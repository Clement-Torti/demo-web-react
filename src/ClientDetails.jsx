function ClientDetails({clients, onDelete, onUpdate}) {
    return (<>
    <h2 className="text-center text-white bg-dark p-3">Client Details</h2>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>

                {clients.map((client) => (
                    <tr key={client.id}>
                        <th scope="row">{client.id}</th>
                        <th scope="row">{client.name}</th>
                        <td>{client.email}</td>
                        <td>{client.age}</td>
                        <td>{client.gender}</td>
                        <td>
                            <button type="button" className="btn btn-outline-primary" onClick={() => onUpdate(client)}>Edit</button>
                        </td>
                        <td>
                            <button type="button" className="btn btn-outline-danger" onClick={() => onDelete(client.id)}>Delete</button>
                        </td>
                    </tr> 

                ))}
                </tbody>
              </table>
    </>)
}

export default ClientDetails;