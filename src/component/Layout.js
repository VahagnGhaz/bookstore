import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/info">Info</Link>
                    </li>
                    <li>
                        <Link to="/cart">Shopping Cart</Link>
                    </li>
                    <li>
                        <Link to="/detail">Book Details</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;