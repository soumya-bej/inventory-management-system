import { useEffect, useState } from "react";
import api from "../api";

function Dashboard() {

    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        loadData();

    }, []);

    const loadData = async () => {

        const productResponse = await api.get("/products/");
        const customerResponse = await api.get("/customers/");
        const orderResponse = await api.get("/orders/");

        setProducts(productResponse.data);
        setCustomers(customerResponse.data);
        setOrders(orderResponse.data);

    };

    const lowStockProducts = products.filter(
    p => p.quantity !== null && p.quantity <= 5
    );

    return (

        <div>

            <h1 className="mb-4">
                Inventory Dashboard
            </h1>

            <div className="row">

                <div className="col-md-3">

                    <div className="card text-white bg-primary mb-3">

                        <div className="card-body">

                            <h5>Total Products</h5>

                            <h1>{products.length}</h1>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-white bg-success mb-3">

                        <div className="card-body">

                            <h5>Total Customers</h5>

                            <h1>{customers.length}</h1>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-dark bg-warning mb-3">

                        <div className="card-body">

                            <h5>Total Orders</h5>

                            <h1>{orders.length}</h1>

                        </div>

                    </div>

                </div>

                <div className="col-md-3">

                    <div className="card text-white bg-danger mb-3">

                        <div className="card-body">

                            <h5>Low Stock Products</h5>

                            <h1>{lowStockProducts.length}</h1>

                        </div>

                    </div>

                </div>

            </div>

            <div className="card mt-4">

                <div className="card-header">

                    <h4>Low Stock Products</h4>

                </div>

                <div className="card-body">

                    <table className="table table-bordered">

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>

                            </tr>

                        </thead>

                        <tbody>

{
    lowStockProducts.length > 0 ?

    lowStockProducts.map((product) => (

        <tr key={product.id}>

            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>

        </tr>

    ))

    :

    <tr>

        <td colSpan="3" className="text-center">
            No low stock products
        </td>

    </tr>
}

</tbody>

                    </table>

                </div>

            </div>

            <div className="card mt-4">

                <div className="card-header">

                    <h4>Recent Orders</h4>

                </div>

                <div className="card-body">

                    <table className="table table-striped">

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Customer ID</th>
                                <th>Product ID</th>
                                <th>Quantity</th>
                                <th>Total</th>

                            </tr>

                        </thead>

                        <tbody>

                            {

                                orders.slice(-5).reverse().map((order) => (

                                    <tr key={order.id}>

                                        <td>{order.id}</td>

                                        <td>{order.customer_id}</td>

                                        <td>{order.product_id}</td>

                                        <td>{order.quantity}</td>

                                        <td>{order.total_amount}</td>

                                    </tr>

                                ))

                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;