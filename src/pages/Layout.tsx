import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import AuctionApp from "./AuctionApp";
import Login from "./auth/Login";
import Register from "./auth/Register";
import GuestRoute from "../components/routing/PrivateRoute";
import PrivateRoute from "../components/routing/GuestRoute";
import SingleItemPage from "./item/SingleItemPage";

function Layout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<AuctionApp />} 
                />
                <Route
                    path="/login"
                    element={<GuestRoute element={<Login />} />}
                />
                <Route
                    path="/register"
                    element={<GuestRoute element={<Register />} />}
                />
                <Route
                    path="/item/:id"
                    element={<PrivateRoute element={<SingleItemPage/>}/>}
                />
            </Routes>
        </Router>
    );
}

export default Layout;
