import {Link} from "react-router-dom";

function Navbar(){

return(

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">

<div className="container">

<Link className="navbar-brand" to="/">
Inventory System
</Link>

<div>

<Link className="btn btn-outline-light me-2"
to="/">
Dashboard
</Link>

<Link className="btn btn-outline-light me-2"
to="/products">
Products
</Link>

<Link className="btn btn-outline-light me-2"
to="/customers">
Customers
</Link>

<Link className="btn btn-outline-light"
to="/orders">
Orders
</Link>

</div>

</div>

</nav>

)

}

export default Navbar