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
            <h2 className="text-center">Update</h2>
            <form>
                <div className="form-group">
                    <label>First name:</label>
                    <input
                        type="text"
                        placeholder={user.firstName}
                        className="form-control"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input
                        type="text"
                        placeholder={user.lastName}
                        className="form-control"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        placeholder={user.email}
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}>
                    Save
                </button>
                <button
                    className="btn btn-danger"
                    onClick={handleCancel}
                    style={{ marginLeft: "10px" }}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default Update;