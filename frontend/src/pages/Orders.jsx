import { useEffect, useState } from "react";
import api from "../api";

function Orders() {

    const [orders, setOrders] = useState([]);

    const [customerId, setCustomerId] = useState("");
    const [productId, setProductId] = useState("");
    const [quantity, setQuantity] = useState("");

    useEffect(() => {
        loadOrders();
    }, []);

    const loadOrders = async () => {

        const response = await api.get("/orders/");

        setOrders(response.data);

    };

    const createOrder = async () => {

        try {

            await api.post("/orders/", {

                customer_id: Number(customerId),
                product_id: Number(productId),
                quantity: Number(quantity)

            });

            setCustomerId("");
            setProductId("");
            setQuantity("");

            loadOrders();

            alert("Order created successfully");

        }

        catch (error) {

            alert(error.response.data.detail);

        }

    };

    const deleteOrder = async (id) => {

    if (window.confirm("Cancel this order?")) {

        await api.delete(`/orders/${id}`);

        loadOrders();

    }

    };

    return (

        <div>

            <h2>Orders</h2>

            <div className="card p-3 mb-4">

                <input
                    className="form-control mb-2"
                    placeholder="Customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Product ID"
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={createOrder}
                >
                    Create Order
                </button>

            </div>

            <table className="table table-bordered">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Product ID</th>
                        <th>Quantity</th>
                        <th>Total Amount</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                {

                    orders.map((order) => (

                        <tr key={order.id}>

                            <td>{order.id}</td>

                            <td>{order.customer_id}</td>

                            <td>{order.product_id}</td>

                            <td>{order.quantity}</td>

                            <td>{order.total_amount}</td>

                            <td>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteOrder(order.id)}
                                >
                                    Cancel
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

export default Orders;