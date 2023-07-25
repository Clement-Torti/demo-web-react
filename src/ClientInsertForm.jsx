import { useState } from "react";

function ClientInsertForm({action}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(''); 
    const [gender, setGender] = useState('');

    return (
    <>
        <h2 className="bg-dark text-white text-center p-3">Insert Client</h2>
        
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
                <button className="btn btn-success mb-3" onClick={() => action({name, email, age, gender})}>Submit</button>
            </div>

        </div>
    </>
    );
}

export default ClientInsertForm;