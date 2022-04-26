import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ResetPassword = () => {

    const [email, setEmail] = useState("");
    const {user, sendPasswordResetEmail, loading, error} = useAuth()
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) return;
        if (user) navigate("/home");
    }, [user, loading]);

    return (
        <div className="">
            <div className="">
                <input
                    type="text"
                    className=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <button
                    className=""
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Send password reset email
                </button>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;