import { reload } from "firebase/auth";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../AuthContextAPI";

const Navbar = () => {
    const { dispatch, currentUser } = useContext(AuthContext);
    const history = useHistory();

    const logoutHandler = () => {
        dispatch({ action: "LOGOUT", payload: null });
        alert("Succesfully log out");
        window.location.reload(true);

    };

    const loginHandler = () => {
        dispatch({ type: "LOGIN", payload: 1 });
        alert("Succesfully log in");
    };

    // {currentUser && };

    console.log("currentUser", currentUser);

    return (
        <nav className="navbar">
            <h1> Blog App </h1>

            <div className="links">
                <Link to="">Home</Link>
                <Link to="/create">Create Blog</Link>
                {!currentUser && <Link to="/login">Log In</Link>}
                {!currentUser && (
                    <Link to="/" onClick={loginHandler}>
                        Test Login
                    </Link>
                )}
                {currentUser && (
                    <Link to="/" onClick={logoutHandler}>
                        Log Out
                    </Link>
                )}

                {/* <button > Log Out </button> */}
            </div>
        </nav>
    );
};

export default Navbar;
