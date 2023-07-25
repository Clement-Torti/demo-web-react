import { useEffect, useState } from 'react';
import './App.css';
import ClientDetails from './ClientDetails';
import ClientInsertForm from './ClientInsertForm';
import ClientUpdateForm from './ClientUpdateForm';

const App = () => {

  const DJANGO_API_URL = 'http://localhost:8000'

  const [clients, setClients] = useState([]);
  const [update, setUpdate] = useState(false);
  const [client, setClient] = useState();

  // Get clients
  const getClients = async () => {
    const response = await fetch(`${DJANGO_API_URL}/get`);
    const clientsData = await response.json();
    setClients(clientsData.data);
  }

  useEffect(() => {
    getClients();
  }, [])

  // Insert client 
  const insertClient = async (client) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    };
    const _ = await fetch(`${DJANGO_API_URL}/insert`, options);
    getClients();
  }

  // Delete client
  const deleteClient = async (id) => {
    const _ = await fetch(`${DJANGO_API_URL}/delete/${id}`);
    getClients();
  }

  // Update Client
  const onUpdateClient = async (client) => {
    setClient(client)
    setUpdate(true)
  }


  const updateClient = async (client) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(client),
    };
    const _ = await fetch(`${DJANGO_API_URL}/update/${client.id}`, options);
    getClients();
    setUpdate(false)
  }
 
  return (<>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-md">
        <a className="navbar-brand" href="/">SISAP React / Django Demo</a>
      </div>
    </nav>

    <div className="container mt-5">
    <div className="row">

        <div className="col-md-4">
        {
        update ?
        <ClientUpdateForm action={updateClient} client={client} />
         : 
        <ClientInsertForm  action={insertClient} />
        }
        </div>

        <div className="col-md-8">
        {
          !update ?
          <ClientDetails clients={clients} onDelete={deleteClient} onUpdate={onUpdateClient}/>
          :
          <></>
        }
        </div>
    </div>
    </div>
    </>
  );
}

export default App;
