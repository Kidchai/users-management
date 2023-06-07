import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../UserService";

function Update() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })


    useEffect(() => {
        getUser(id).then(response => {
            setUser(response.data);
        });
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(oldUser => ({
            ...oldUser,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        updateUser(id, user).then(() => {
            navigate("/users");
        });
    };

    const handleCancel = () => {
        navigate("/users");
    };


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        <div className="card-body">
                            <h3 class="card-title" style={{ marginBottom: "20px" }}>
                                Edit user</h3>
                            <form>
                                <div className="form-group">
                                    <label style={{ marginLeft: "1px" }}>
                                        First name:</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder={user.firstName}
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
                                        placeholder={user.lastName}
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
                                        placeholder={user.email}
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
                                    Save
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

export default Update;