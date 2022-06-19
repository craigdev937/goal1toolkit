import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { AuthAction } from "../global/AuthSlice";
import { AUTH } from "../global/FetchAuthAPI";

export const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(AUTH.logout());
        dispatch(AuthAction.reset());
        navigate("/");
    };

    return (
        <React.Fragment>
            <header className="header">
                <aside className="logo">
                    <Link to="/">GoalSetter</Link>
                </aside>
                <ul>
                    {user ? (
                        <li>
                            <button className="btn" onClick={onLogout}>
                                <FaSignOutAlt />Logout
                            </button>
                        </li>
                    ) : (
                        <section>
                            <li>
                                <Link to="/login">
                                    <FaSignInAlt />Login
                                </Link>
                            </li>
                            <li>
                                <Link to="/register">
                                    <FaUser />Register
                                </Link>
                            </li>
                        </section>
                    )}
                </ul>
            </header>
        </React.Fragment>
    );
};


