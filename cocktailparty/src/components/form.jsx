// Form.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/form.css";

function Form({ type, onSubmit }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        dob: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div id="form">
            <h2>{type === "login" ? "Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                {type === "signup" && (
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <button type="submit">
                    {type === "login" ? "Login" : "Sign Up"}
                </button>
            </form>
        </div>
    );
}

Form.propTypes = {
    type: PropTypes.oneOf(["login", "signup"]).isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Form;
