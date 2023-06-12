import React from "react";
import { useNavigate } from "react-router-dom";

function UserForm({ user, handleChange, handleSubmit, formTitle, buttonLabel, placeholders }) {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/users");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <h3 className="card-title" style={{ marginBottom: "20px"}}>
                                {formTitle}
                            </h3>
                            <form>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px"}}>
                                        First name:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder={placeholders.firstName}
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder={placeholders.lastName}
                                        name="lastName"
                                        className="form-control"
                                        value={user.lastName}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        Email:</label>
                                    <input
                                        type="email"
                                        placeholder={placeholders.email}
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={handleChange}
                                        style={{ marginBottom: "9px", marginTop: "4px" }}
                                    />
                                </div>
                                <button
                                    className="btn btn-success"
                                    onClick={handleSubmit}
                                    style={{ marginTop: "4px" }}
                                >
                                    {buttonLabel}
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleCancel}
                                    style={{ marginLeft: "10px", marginTop: "4px" }}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserForm;
