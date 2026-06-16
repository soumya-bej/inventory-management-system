import { useEffect, useState } from "react";
import api from "../api";

function Customers() {

    const [customers, setCustomers] = useState([]);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        loadCustomers();
    }, []);

    const loadCustomers = async () => {

        const response = await api.get("/customers/");

        setCustomers(response.data);

    };

    const addCustomer = async () => {

        await api.post("/customers/", {

            full_name: fullName,
            email,
            phone

        });

        setFullName("");
        setEmail("");
        setPhone("");

        loadCustomers();

    };

    const deleteCustomer = async (id) => {

    if (window.confirm("Delete this customer?")) {

        await api.delete(`/customers/${id}`);

        loadCustomers();

    }

    };

    return (

        <div>

            <h2>Customers</h2>

            <div className="card p-3 mb-4">

                <input
                    className="form-control mb-2"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={addCustomer}
                >
                    Add Customer
                </button>

            </div>

            <table className="table table-bordered">

                <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {

                    customers.map((customer) => (

                        <tr key={customer.id}>

                            <td>{customer.id}</td>

                            <td>{customer.full_name}</td>

                            <td>{customer.email}</td>

                            <td>{customer.phone}</td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteCustomer(customer.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

    );

}

export default Customers;