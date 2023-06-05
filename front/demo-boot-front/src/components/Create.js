import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, createUser } from "../UserService";

function Create() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    useEffect(() => {
        if (id !== "_add") {
            getUser(id)
                .then((response) => {
                    const { firstName, lastName, email } = response.data;
                    setUser({ firstName, lastName, email });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    const save = (event) => {
        event.preventDefault();
        createUser(user).then(() => {
            navigate("/users");
        })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(oldUser => ({
            ...oldUser,
            [name]: value,
        }));
    };

    const handleCancel = () => {
        navigate("/users");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        Create
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>First name:</label>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        name="firstName"
                                        className="form-control"
                                        value={user.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name:</label>
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        name="lastName"
                                        className="form-control"
                                        value={user.lastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        className="form-control"
                                        value={user.email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={save}
                                >
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;