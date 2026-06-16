import { useEffect, useState } from "react";
import api from "../api";

function Products() {

    const [products, setProducts] = useState([]);

    const [name, setName] = useState("");
    const [sku, setSku] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {

        const response = await api.get("/products/");

        setProducts(response.data);

    };

    const addProduct = async () => {

        if (editId) {

            await api.put(`/products/${editId}`, {

                name,
                sku,
                price: Number(price),
                quantity: Number(quantity)

            });

            setEditId(null);

        } else {

            await api.post("/products/", {

                name,
                sku,
                price: Number(price),
                quantity: Number(quantity)

            });

        }

        setName("");
        setSku("");
        setPrice("");
        setQuantity("");

        loadProducts();

    };

    const deleteProduct = async (id) => {

    if (window.confirm("Delete this product?")) {

        await api.delete(`/products/${id}`);

        loadProducts();

    }

};

    const editProduct = (product) => {

        setEditId(product.id);

        setName(product.name);
        setSku(product.sku);
        setPrice(product.price);
        setQuantity(product.quantity);

    };

    return (

        <div>

            <h2>Products</h2>

            <div className="card p-3 mb-4">

                <input
                    className="form-control mb-2"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="SKU"
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button
                    className="btn btn-success"
                    onClick={addProduct}
                >
                    {editId ? "Update Product" : "Add Product"}
                </button>

            </div>

            <table className="table table-bordered">

                <thead>

                <tr>

                    <th>ID</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>

                </tr>

                </thead>

                <tbody>

                {

                    products.map((product) => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>{product.sku}</td>

                            <td>{product.price}</td>

                            <td>{product.quantity}</td>

                            <td>

                                <button
                                    className="btn btn-warning me-2"
                                    onClick={() => editProduct(product)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteProduct(product.id)}
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

export default Products;