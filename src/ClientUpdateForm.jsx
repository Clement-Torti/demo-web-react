import { useState } from "react";

function ClientUpdateForm({action, client}) {
    const [name, setName] = useState(client ? client.name : '');
    const [email, setEmail] = useState(client ? client.email : '');
    const [age, setAge] = useState(client ? client.age : ''); 
    const [gender, setGender] = useState(client ? client.gender : '');
  

    return (
    <>
        <h2 className="bg-dark text-white text-center p-3">Update Client</h2>
        
        <br/>
        <div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter the student Name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="form-group">
                <input type="email" className="form-control mt-2" placeholder="Enter the student Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="form-group">
                <input type="number" className="form-control mt-2" placeholder="Enter the student Age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>

            <div className="form-group">
                <select id="gender" className="form-control mt-2" value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                </select>
            </div>
            <br />
            <div className="d-grid gap-2">
                <button className="btn btn-success mb-3" onClick={() => action({id: client.id, name, email, age, gender})}>Update</button>
            </div>

        </div>
    </>
    );
}

export default ClientUpdateForm;