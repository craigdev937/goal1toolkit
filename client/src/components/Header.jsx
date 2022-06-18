import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";

export const Header = () => {
    const navigate = useNavigate();   

    return (
        <React.Fragment>
            <h1>Header</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime porro fugiat quas, aut quos molestiae alias deserunt omnis provident excepturi natus velit commodi consectetur voluptatibus neque? Repellat, vero molestias.</p>
        </React.Fragment>
    );
};


